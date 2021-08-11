const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const { get } = require('lodash')

const getImagesFromRichText = edge =>
  get(edge, 'node.body.json.content', []).reduce((acc, c) => {
    const url = get(c, 'data.target.fields.file.en.url')
    if (c.nodeType == 'embedded-asset-block' && url) {
      return [...acc, url]
    }
    return acc
  }, [])



exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-particle-animation/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions


   createRedirect({
     fromPath: '/',
     toPath: '/home',
     isPermanent: true,
     redirectInBrowser: true,
  })

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const roadmapTemplate = path.resolve(`./src/templates/roadmap.js`)
  const featurePageTemplate = path.resolve(`./src/templates/featurePage.js`)
  const faqPageTemplate = path.resolve(`./src/templates/faq.js`)

  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              featuredImage {
                file {
                  url
                }
              }
              excerpt {
                childMarkdownRemark {
                  html
                }
              }
              postTitle
              postBody {
                raw
              }
              slug
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              featureText1 {
                raw
              }
              id
              subtitle
              title
              slug
            }
          }
        }
        allContentfulRoadmap {
            edges {
              node {
                slogan
                slug
                timelineNodes {
                  title
                  description
                }
                title
                colour
              }
            }
          }
          allContentfulFeaturePage {
           edges {
             node {
               title
               subtitle
               slug
               slogan
               featureText1 {
                 raw
               }
               contentItems {
                 body {
                   raw
                 }
                 title
                 sacramentIcon {
                   file {
                     url
                   }
                 }
               }
             }
           }
         }

         allContentfulFaqPage {
          edges {
            node {
              subtitle
              title
              slug
              featureItem {
                title
                answer {
                  raw
                }
              }
            }
          }
        }

        wpgraphql {
        posts (first: 10000) {
          edges {
            node {
              id
              slug
              featuredImage{
                sourceUrl
              }
              categories {
                edges {
                  node {
                    name
                  }
                }
              }

            }
          }
        }

        pages {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulBlogPost.edges
    const pages = result.data.allContentfulPage.edges
  //  const roadmaps = result.data.allContentfulRoadmap.edges
    const featurePages = result.data.allContentfulFeaturePage.edges
    const faqPages = result.data.allContentfulFaqPage.edges
    const blogPosts = result.data.wpgraphql.posts.edges;
    const allPages = result.data.wpgraphql.pages.edges;

    blogPosts.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: blogPost,
            context: {
                id: node.id,
                slug: node.slug,
                featuredImage: node.featuredImage,
            }
        });
    });


    pages.forEach((page, index) => {
      let tag = page.node.slug;

      createPage({
        path: tag,
        component: pageTemplate,
        context: {
          slug: tag,
        },
      })
    })

    // roadmaps.forEach((roadmap, index) => {
    //
    //   createPage({
    //     path: roadmap.node.slug,
    //     component: roadmapTemplate,
    //     context: {
    //       title: roadmap.node.title,
    //     },
    //   })
    // })

    featurePages.forEach((fPage, index) => {
      const images = getImagesFromRichText(fPage)

      createPage({
        path: fPage.node.slug,
        component: featurePageTemplate,
        context: {
          images,
          slug: fPage.node.slug,
        },
      })
    })

    faqPages.forEach((fPage, index) => {

      createPage({
        path: fPage.node.slug,
        component: faqPageTemplate,
        context: {
          slug: fPage.node.slug,
        },
      })
    })

    return null
  })
}

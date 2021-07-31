const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: "blog/" + post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })


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
      createPage({
        path: fPage.node.slug,
        component: featurePageTemplate,
        context: {
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

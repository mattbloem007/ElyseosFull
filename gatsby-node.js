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
              featureText2 {
                raw
              }
              id
              subtitle
              title
              slogan
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
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulBlogPost.edges
    const pages = result.data.allContentfulPage.edges
    const roadmaps = result.data.allContentfulRoadmap.edges


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

    roadmaps.forEach((roadmap, index) => {

      createPage({
        path: roadmap.node.slug,
        component: roadmapTemplate,
        context: {
          title: roadmap.node.title,
        },
      })
    })

    return null
  })
}

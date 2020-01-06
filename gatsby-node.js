
const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {data} = await graphql(`
  query{
    services:allContentfulOurServices{
      edges{
        node{
          slug
        }
      }
    }

    posts:allContentfulBlog{
      edges{
        node{
          slug
        }
      }
    }
  }
  `)

data.services.edges.forEach(({node})=>{
    createPage({
        path:`services/${node.slug}`,
        component:path.resolve("./src/templates/service-template.js"),
        context: {
            slug: node.slug,
        },
    })
})

data.posts.edges.forEach(({ node })=>{
  createPage({
    path: `blog/${node.slug}`,
    component: path.resolve("./src/templates/blog-template.js"),
    context: {
      slug: node.slug,
    },
  })
})
}
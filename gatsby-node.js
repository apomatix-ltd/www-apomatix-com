/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { resolve } = require(`path`)
const path = require(`path`)
const glob = require(`glob`)
const chunk = require(`lodash/chunk`)
// const { dd } = require(`dumper.js`)

const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath })
}

/** STEP #1: Implement the Gatsby API “createPages”. This is
 * called after the Gatsby bootstrap is finished so you have
 * access to any information necessary to programmatically
 * create pages.
 * Will create pages for WordPress pages (route : /{slug})
 * Will create pages for WordPress posts (route : /post/{slug})
 */
exports.createPages = async ({ graphql, actions }) => {
  const templates = getTemplates()
  const { createPage } = actions;

  const {
    data: {
      allWpContentNode: { nodes: contentNodes },
    },
  } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_NODES {
      allWpContentNode(
        sort: { fields: modifiedGmt, order: DESC }
        filter: { nodeType: { ne: "MediaItem" } }
      ) {
        nodes {
          nodeType
          uri
          id
        }
      }
    }
  `)

  const contentTypeTemplateDirectory = `./src/templates/single/`
  const contentTypeTemplates = templates.filter((path) =>
    path.includes(contentTypeTemplateDirectory)
  )

  await Promise.all(
    contentNodes.map(async (node, i) => {
      const { nodeType, uri, id } = node
      // this is a super super basic template hierarchy
      // this doesn't reflect what our hierarchy will look like.
      // this is for testing/demo purposes
      const templatePath = `${contentTypeTemplateDirectory}${nodeType}.js`

      const contentTypeTemplate = contentTypeTemplates.find(
        (path) => path === templatePath
      )

      if (!contentTypeTemplate) {
        return
      }

      await actions.createPage({
        component: resolve(contentTypeTemplate),
        path: '/blog' + uri,
        context: {
          id,
          nextPage: (contentNodes[i + 1] || {}).id,
          previousPage: (contentNodes[i - 1] || {}).id,
        },
      })
    })
  )

  // create the homepage
  const {
    data: { allWpPost },
  } = await graphql(/* GraphQL */ `
    {
      allWpPost(sort: { fields: modifiedGmt, order: DESC }) {
        nodes {
          uri
          id
        }
      }
    }
  `)

  const perPage = 10
  const chunkedContentNodes = chunk(allWpPost.nodes, perPage)

  await Promise.all(
    chunkedContentNodes.map(async (nodesChunk, index) => {
      const firstNode = nodesChunk[0]
      const page = index + 1
      const offset = perPage * index

      await actions.createPage({
        component: resolve(`./src/templates/wp.js`),
        path: page === 1 ? `/blog/` : `/blog/${page}`,
        context: {
          firstId: firstNode.id,
          page: page,
          offset: offset,
          totalPages: chunkedContentNodes.length,
          perPage,
        },
      })
    })
  )


  const result2 = await graphql(`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            template
            title
          }
        }
      } 
    }
  }`)

    // Handle errors
    if (result2.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    // Create markdown pages
    const posts = result2.data.allMarkdownRemark.edges
  
    posts.forEach((post, index) => {
      const id = post.node.id
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
  
      createPage({
        path: post.node.frontmatter.slug,
        component: path.resolve(
          `src/templates/${String(post.node.frontmatter.template)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          previous,
          next,
        },
      })
    })

};

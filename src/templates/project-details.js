import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
          {/* <GatsbyImage
            image={getImage(project.frontmatter.featuredImg)}
            alt={project.frontmatter.title}
          /> */}
        </div>
        {/* <div className={styles.html} dangerouslySetInnerHTML={project.html} /> */}
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query DetailsPage {
//     projects: allMarkdownRemark(
//       sort: { fields: frontmatter___date, order: DESC }
//     ) {
//       nodes {
//         frontmatter {
//           slug
//           stack
//           title
//           date
//           featuredImg {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//         id
//         html
//       }
//     }
//     contact: site {
//       siteMetadata {
//         contact
//       }
//     }
//   }
// `

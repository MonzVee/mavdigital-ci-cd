import React from 'react';
import Service from '../Services/Service';
import {useStaticQuery, graphql} from 'gatsby';
import Title from '../Title';
import styles from "../../css/items.module.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const getFeatured = graphql`
query{
    featuredServices: allContentfulOurServices(filter:{featured:{eq:true}}){
      edges{
        node{
          name
          description{description}
          slug
          contentful_id
          images{
            fluid{
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          
          
        }
      }
    }
  }
`

 const Featured = () => {
    const response = useStaticQuery(getFeatured)
    const services = response.featuredServices.edges;
    
    return (
        <section className={styles.tours}>
            
        <Title title="our" subtitle="services"/>
           <div className={styles.center}>
            {services.map(({ node })=> {
               return <Service key={node.contentful_id} service={node}/> 
            }

            )}
            </div>
            
            <AniLink fade to="/services" className="btn-primary">
                all services
            </AniLink>
        </section>
    )
}


export default Featured;







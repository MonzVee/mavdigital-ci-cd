import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import styles from "../css/template.module.css";
import Img from "gatsby-image";
import AniLink from 'gatsby-plugin-transition-link/AniLink';


const ServiceTemplate = ({data}) => {

    const {name, description:{description}, images} = data.service    

    const [mainImage,...serviceImages] = images

    return (
        <Layout>
            <StyledHero img={mainImage.fluid}/>
            <section className={styles.template}>
                <div className={styles.center}>
                <div className={styles.images}>
                    {serviceImages.map((item, index)=>{
                        return( 
                        <Img key={index} fluid={item.fluid} alt="single service"
                        className={styles.image}/> 
                        )
                    })}

                </div>
                    <h2>{name}</h2>
                <p className={styles.desc}>{description}</p>

                <AniLink fade to="/services" className="btn-primary">
                    back to services
                </AniLink>
                </div>

            </section>
        </Layout>
    )
}

export const query = graphql`
query($slug: String!){
    service:contentfulOurServices(slug:{eq:$slug}) {
        name
      description{
        description
        
      }
      images{
        fluid{
            ...GatsbyContentfulFluid
        }
      }
    }
      
    
  }
`

export default ServiceTemplate;

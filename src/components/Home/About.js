import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";



const getAbout = graphql `
query aboutImage{
    aboutImage: file(relativePath:{eq:"mav-ecommerce.jpg"}){
      childImageSharp{
        fluid(maxWidth:600){
          ...GatsbyImageSharpFluid_tracedSVG
        }
        
      }
    }
  }
`

export default function About() {
    const {aboutImage} = useStaticQuery(getAbout);

    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <Img fluid={aboutImage.childImageSharp.fluid} alt="background-about"/>
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>we leverage technology</h4>
                    <p>We are a modern software development company, with
                        entrepreneurship at our core. Our products are built on the understanding
                        that technology is merely a vehicle, in order to increase your brand and grow your business.
                    </p>
                    <p>
                        No matter your size, project or need, we can help you get to market fast!
                        Specialists in building blazing fast, Progressive Web Apps which are 
                        cross-platform, easily accesible and full of personalised feautures for engaging your 
                        audience.
                    </p>
                    <button type="button" className="btn-primary">
                        contact us
                    </button>

                </article>
            </div>
        </section>
    )
}

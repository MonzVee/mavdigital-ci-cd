import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Featured from '../components/Home/Featured';
import { graphql } from "gatsby";

export default ({data}) => (


<Layout>
 <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
     <Banner
     title="progressive web app"
     info="MOBILE FIRST technology for blazing fast web apps. Increase 
      brand accessibility and boost conversions."
     >
         <AniLink fade to="/contact" className="btn-white">
             contact us
         </AniLink>

     </Banner>
 </StyledHero>
 <About />
 <Services />
 <Featured />
</Layout>

)

export const query = graphql `
query{
    defaultBcg: file(relativePath:{eq:"mav-image-mobile-background.jpg"}){
      childImageSharp{
        fluid(quality: 90,maxWidth:4160){
            ...GatsbyImageSharpFluid_withWebp
        }
        
      }
    }
  }
`
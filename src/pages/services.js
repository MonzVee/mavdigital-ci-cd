import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from "gatsby";


export default function services({ data }) {
    return (
        <Layout>
            <StyledHero img={data.servicesBcg.childImageSharp.fluid}/>
        </Layout>
    )
}

export const query = graphql `
query{
    servicesBcg: file(relativePath:{eq:"mav-image-mobile-nature.jpg"}){
      childImageSharp{
        fluid(quality: 90,maxWidth:4160){
            ...GatsbyImageSharpFluid_withWebp
        }
        
      }
    }
  }
`
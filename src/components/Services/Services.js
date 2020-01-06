import React from 'react';
import ServiceList from './ServiceList';
import {useStaticQuery, graphql} from 'gatsby';


const getService = graphql `
query{
    services: allContentfulOurServices{
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

const Services = () => {
    const {services} = useStaticQuery(getService);

    return (
       
            
            <ServiceList services={services}/>
       
    )
}


export default Services;
import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';

export default () => (


<Layout>
 <SimpleHero>
     <Banner
     title="progressive web app"
     info="mobile first technology for blazing fast web apps. Increase 
      brand accessibility and boost conversions."
     >
         <Link to="/contact" className="btn-white">
             contact us
         </Link>

     </Banner>
 </SimpleHero>
 <About />
 <Services />
</Layout>

)
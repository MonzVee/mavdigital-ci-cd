import React from 'react';
import Image from "gatsby-image";
import styles from "../../css/tour.module.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";



const Service = ({service}) => {

    const {name, description, images, slug} = service
    let mainImage = images[0].fluid;

    return (
        <article className={styles.tour}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="single service"/>
                <AniLink fade className={styles.link} to={`/services/${slug}`}>
                    details
                </AniLink>
            </div>

            <div className={styles.footer}>
                <h3>{name}</h3>

            </div>
        </article>
    )
}

export default Service;
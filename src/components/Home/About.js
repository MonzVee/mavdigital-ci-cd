import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';


export default function About() {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company"/>
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>we leverage technology</h4>
                    <p>We are a modern software development company, with
                        entrepreneurship at our core. Our products are built on the understanding
                        that techology is merely a vehicle, in order to increase your brand and grow your business.
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

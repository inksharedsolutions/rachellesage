import React from 'react'
import Banner from '../components/banner'
import '../assets/scss/pages.scss'
import Layout from '../components/layout'
import AuthorImg from '../../static/img/author_image.jpg'

 const AboutTheAuthor = (props)=>{

     return(
        <> 
            <Layout extPath={false}>

                <Banner 
                    spanFirst={`About the`}
                    contextHeading={`Author`} 
                />

                <div className="container">
				    <section className="body-author-contents columns">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>
                        </div>


                        <article className="article-section" id="author">

                            <div className="heading-quote">
                                <h4>
                                “It wasn’t silent, but the noise level got increasingly lower as I heard my name said a thousand times over.”
                                </h4>
                                
                                <span className="ata-span-fx">author quote</span>
                            </div>


                            <p>
                            Rachel LeSage is a new author from Bourbonnais, IL. She first began writing when she was twelve and hasn’t stopped since. She spent four years of her undergrad at Northern Illinois University, where she studied French and Spanish. Upon her completion of her bachelor’s degrees, she attended Olivet Nazarene University for a professional degree in business. She currently works full-time as a saleswoman for a tech company. She likes to knit, jog, and listen to podcasts. Writing will always be her first love. 
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Rachel LeSage
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>
                 
            </Layout>
        </>
     )

 }

 export default AboutTheAuthor;
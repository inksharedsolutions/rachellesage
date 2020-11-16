import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/img/author_image.jpg'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <img src={AuthorImg} />
                        </div>

                        <div className="wrapper-auth-content">
                            <p>
                            Rachel LeSage is a new author from Bourbonnais, IL. She first began writing when she was twelve and hasn’t stopped since. She spent four years of her undergrad at Northern Illinois University, where she studied French and Spanish.
                            </p>

                            <h1>Rachel LeSage</h1>

                            <span className="span-tagline">Author & Writer</span>

                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain 
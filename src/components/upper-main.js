import React, {useState, useEffect } from 'react'
import {Link} from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Book1 from '../../static/img/book_cover.png'
import Book2 from '../../static/img/book_cover_2.png'
import Book3 from '../../static/img/book_cover_3.png'
import Book4 from '../../static/img/book_cover_4.png'


const UpperMain =()=>{

    
    const [mobState, __functState] = useState(false);


    useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });

      }, [mobState]); 


      console.log(mobState);

    var settings = {
        // dots: true,
        // infinite: true,
        // speed: 1500,
        // slidesToShow: ,
        // slidesToScroll: 1,
     };



    return  (
        <>  
            <section className="upper-main">
                <div className="container-gt">

                    <div className="content-wrapper">
                        <h1>Books</h1>
                        
                        <p className="middle-params">
                            Sometimes, fiction isn't a far cry from reality.
                        </p>
                    </div>

                    {/* <Slider {...settings}> */}
                        <div className="book-wrapper-slider">
                            <img src={Book1}/>
                            <h3>Like A Lady</h3>
                        </div>
                {/* </Slider> */}
                </div>
            </section>
        </>
    )
}

export default UpperMain
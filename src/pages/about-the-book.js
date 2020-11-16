import React from 'react'
import Book1 from '../../static/img/book_cover.png'

import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/layout'
import Banner from '../components/banner'
import BookInfo  from '../components/book-info/book-info'
import ABA from './about-the-author'

const AboutTheBook= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'rachel-lesage-1',
	  config: { identifier:  12, slug}
	}

	const bannerText = (
		<>	
			<span className="banr-tagline-fx">Gardiner Noble</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Book</span>
			</h1>
		</>
	)

	return(
		<Layout extPath={false}>
			
            <Banner 
				spanFirst={`About the`}
				contextHeading={`Book`}
            />

			<main className="wrapperMain">
				<div 
					className="container"
					id="book-containers" >


						<BookInfo
							data={{
								title:`Like A Lady`,
								spanTitle: '',
								imgSrc: Book1,
								id:'susies_submisision',
								content:
								`Rachel LeSage is a new author from Bourbonnais, IL. She first began writing when she was twelve and hasn’t stopped since. She spent four years of her undergrad at Northern Illinois University, where she studied French and Spanish. Upon her completion of her bachelor’s degrees, she attended Olivet Nazarene University for a professional degree in business. She currently works full-time as a saleswoman for a tech company. She likes to knit, jog, and listen to podcasts. Writing will always be her first love. `,

								ebooks:{
									stratton : 'https://www.stratton-press.com/books/like-a-lady/',
									barnes: 'https://www.barnesandnoble.com/w/like-a-lady-rachel-lesage/1123136461?ean=9781643459554',
									amazon :'https://www.amazon.com/Like-Lady-Rachel-LeSage-ebook/dp/B085VQDDXX/ref=sr_1_1?dchild=1&keywords=9781643459554&qid=1584114135&sr=8-1', 
								},
								paperback:{
									amazon:'https://www.amazon.com/Like-Lady-Rachel-Lesage/dp/1643459546/ref=sr_1_1?dchild=1&keywords=9781643459547&qid=1584114177&sr=8-1',
									barnes:'https://www.barnesandnoble.com/w/like-a-lady-rachel-lesage/1123136461?ean=9781643459547',
									booksamillion:'https://www.booksamillion.com/p/Like-Lady/Rachel-Lesage/9781643459547?id=8049069540563&_ga=2.260855053.1076413558.1604906972-2145380449.1604906972',
								}
							}}
						/>

							
						<div className="commentSection" >
							<DiscussionEmbed {...disqusConfig} />
						</div>
				</div>	
			</main>


	  	</Layout>
	)
}

export default AboutTheBook;
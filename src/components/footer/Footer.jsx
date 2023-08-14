import Image from "next/image";
import { BsYoutube } from 'react-icons/bs'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
export default async function Footer() {
    const API = "http://sobit2204.pythonanywhere.com/api/v1/"
    const categories = "get_category/"
    const category_item = "category/"


    const api = await fetch(`${API}${categories}`)
    const response = await api.json()
    const articles_id = response.map((item) => {
        return item.id
    })
    console.log(articles_id);
    
    const article = await fetch(`${API}${category_item}${articles_id}`)
    
    const res_category = await article.json()
    console.log(res_category);
    
    



    
    
    

    // const category = "category"


    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-blog-one footer-blog">
                            <h4 className="footer-blog-title footer-blog-main-title">WorldTime</h4>
                            <p className="footer-blog-one-text">Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.</p>
                            <ul className="footer-blog-one-list">
                                <a href="#!" className="footer-blog-one-item">
                                    <FaFacebookF />
                                </a>
                                <a href="#!" className="footer-blog-one-item">
                                    <BsYoutube />
                                </a>
                                <a href="#!" className="footer-blog-one-item">
                                    <FaTwitter />
                                </a>
                            </ul>
                        </div>
                        <div className="footer-blog-two footer-blog">
                            <h4 className="footer-blog-title footer-blog-secondary-title">RECENT POSTS</h4>
                            <ul className="footer-blog-two-list">
                                <li className="footer-blog-two-item">
                                    <div className="footer-blog-two-item-logo">
                                        <Image src="https://sobit2204.pythonanywhere.com/media/images/FgO2foIH3iAXVIdMCEBx_btLqmYaseD8_M8jBqG4.jpg" alt="logo" fill sizes="100%" priority className="footer-blog-two-item-image" />
                                    </div>
                                    <h4 className="footer-blog-two-pass-title">Cotton import from USA to soar was American traders predict</h4>
                                </li>
                                <li className="footer-blog-two-item">
                                    <div className="footer-blog-two-item-logo">
                                        <Image src="https://sobit2204.pythonanywhere.com/media/images/FgO2foIH3iAXVIdMCEBx_btLqmYaseD8_M8jBqG4.jpg" alt="logo" fill sizes="100%" priority className="footer-blog-two-item-image" />
                                    </div>
                                    <h4 className="footer-blog-two-pass-title">Cotton import from USA to soar was American traders predict</h4>
                                </li>
                                <li className="footer-blog-two-item">
                                    <div className="footer-blog-two-item-logo">
                                        <Image src="https://sobit2204.pythonanywhere.com/media/images/FgO2foIH3iAXVIdMCEBx_btLqmYaseD8_M8jBqG4.jpg" alt="logo" fill sizes="100%" priority className="footer-blog-two-item-image" />
                                    </div>
                                    <h4 className="footer-blog-two-pass-title">Cotton import from USA to soar was American traders predict</h4>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-blog-three footer-blog">
                            <h4 className="footer-blog-title footer-blog-secondary-title">CATEGORIES</h4>
                            <ul className="footer-blog-three-list">
                                {/* <li className="footer-blog-three-item">
                                    <h6 className="footer-blog-three-item-title">Magazine</h6>
                                    <span className="footer-blog-three-item-span">1</span>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='bottom-footer'>

            </footer>
        </>
    )
}

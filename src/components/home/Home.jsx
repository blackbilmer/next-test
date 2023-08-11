import moment from "moment"
import Image from "next/image";
import Link from "next/link";
import Button from '@mui/material/Button';
export default async function Api() {
    const API = "https://wordnewsuz.pythonanywhere.com/api/v1/"

    const api = await fetch(`${API}get_category/`)
    const response = await api.json()
    const apiNews = await fetch(`${API}get_all_news/`)
    const apiNew = await apiNews.json()
    
    
    
    
    const maxLengthAPI = apiNew.map((item) => {
        return item.id
    })
    
    const maxLengthNews = apiNew.length
    const randomItem = maxLengthAPI[Math.floor(Math.random() * maxLengthNews)]
    const apiCategory = await fetch(`${API}news/${randomItem}`)
    const jsonCategory = await apiCategory.json()
    const random_news = jsonCategory.news_detail_serializer
    const std = response.map((item, key) => {
        return (
            <ul key={key}>
                <li className="">
                    {item.id}
                    <br />
                    {item.name}
                </li>
            </ul>
        )
    })
    const category = apiNew.map((item, index) => {
        const truncateString = (string = '', maxLength = 50) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}`
                : string
        const truncateTime = truncateString(item.created_at, 16)
        const dataNews = moment(truncateTime).startOf('minute').fromNow();
        return (
            <>
                <Link href="/" className="home-content-grid-item-two-blog-title">
                    <h4 className="home-content-grid-item-two-title">{item.title}</h4>
                    <p className="home-content-grid-item-two-data">{dataNews}</p>
                </Link>

            </>
        )
    })


    const items = category.slice(-4);
    const truncateString = (string = '', maxLength = 100) =>
        string.length > maxLength
            ? `${string.substring(0, maxLength)}…`
            : string
    const itemTitle = truncateString(random_news.title, 55)
    const itemData = moment(random_news.created_at).startOf('minute').fromNow();


    





    const navigation = response.map((item, index) => {
        return <li key={index} className="content-wrapper-category-item">
            <Link href={`/`} className="content-wrapper-category-link">{item.name}</Link>
        </li>
    })

    return (
        <>
            <section className='home'>
                <div className='container'>
                    <div className="home-content">
                        <div className="home-content-grid">
                            <Link href="/" data-aos="fade-up" data-aos-duration="1200" className="home-content-grid-item-one content-wrapper-header">
                                <Image priority src={random_news.image_url} fill sizes="100%" className='content-wrapper-logo' alt="" />
                                <div className="content-wrapper-card-article-data">
                                    <span className='content-wrapper-card-article-data-text'>{itemData}</span>
                                </div>
                                <div className="content-wrapper-logo-back"></div>
                                <div className="content-wrapper-header-content">
                                    <h2 className="content-wrapper-header-title">{itemTitle}</h2>
                                </div>
                            </Link>
                            <div className="home-content-grid-item-two" data-aos="fade-up" data-aos-duration="1200">
                                <h4 className="home-content-grid-item-two-laster-title">Latest news</h4>
                                <div className="home-content-grid-item-two-blog">
                                    {items}
                                </div>
                            </div>
                        </div>
                        <main className="home-layout-page">
                            <div className="home-layout-page-scroll" data-aos="fade-up" data-aos-duration="1200">
                                <span>
                                    <div className="home-layout-page-scroll-component">
                                        <div className="home-layout-page-scroll-component-logo_blog">
                                            <Image src="https://wordnewsuz.pythonanywhere.com/media/images/4.jpg" alt="logo" fill sizes="100%" priority className="home-layout-page-scroll-component-image" />
                                        </div>
                                    </div>
                                    <Button className="hhfh">
                                        click me
                                    </Button>
                                </span>
                            </div>
                        </main>


                    </div>
                </div>
            </section>
        </>
    )
}
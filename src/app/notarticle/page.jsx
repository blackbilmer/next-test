import Link from 'next/link'
import React from 'react'


export default function Page() {
    return (
        <section className='notFoundArticle'>
            <h2 className="notFoundArticle-title">There are currently no articles for this category, so you may enjoy the articles on the main page</h2>
            <Link className='notFoundArticle-link' href="/">Main</Link>
        </section>
    )
}

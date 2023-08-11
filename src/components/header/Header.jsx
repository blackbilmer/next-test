// "use client"


import Image from 'next/image'
import Link from 'next/link'
// import { Container } from 'react-bootstrap'
import { BsSearch, BsYoutube } from 'react-icons/bs'
import { GrSearch } from 'react-icons/gr'
import { HiSearch } from 'react-icons/hi'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

// import { logo_header } from '../../image/logo.svg'
// import { Button } from '@mui/material'


export default async function Header() {
    let title = "'"
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <nav className="header-top">
                        <div className="header-top-content">
                            <ul className="header-top-content-list">
                                <li className="header-top-content-item">
                                    <Link href="/" className="header-top-content-link">Advertise</Link>
                                </li>
                                <li className="header-top-content-item">
                                    <Link href="/" className="header-top-content-link">About</Link>
                                </li>
                                <li className="header-top-content-item">
                                    <Link href="/" className="header-top-content-link">Events</Link>
                                </li>
                                <li className="header-top-content-item">
                                    <Link href="/" className="header-top-content-link">Write for Us</Link>
                                </li>
                                <li className="header-top-content-item">
                                    <Link href="/" className="header-top-content-link">In the Press</Link>
                                </li>
                            </ul>
                            <div className="header-top-content-group">
                                <HiSearch className='header-top-content-icon' />
                                <ul className="header-top-content-list">
                                    <li className="header-top-content-item">
                                        <Link href="/" className="header-top-content-link">Login</Link>
                                    </li>
                                    <li className="header-top-content-item">
                                        <Link href="/" className="header-top-content-link">Sign in</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <nav className='header-bottom'>
                        <div className="header-bottom-content">
                            <h1 className="header-bottom-content-title">WorldTime</h1>
                            <ul className="header-bottom-content-list">
                                <li className="header-bottom-content-item">
                                    <Link href="/" className='header-bottom-content-link'>O{title}ZBEKISTON</Link>
                                </li>
                                <li className="header-bottom-content-item">
                                    <Link href="/" className='header-bottom-content-link'>JAHON</Link>
                                </li>
                                <li className="header-bottom-content-item">
                                    <Link href="/" className='header-bottom-content-link'>IQTISODIYOT</Link>
                                </li>
                                <li className="header-bottom-content-item">
                                    <Link href="/" className='header-bottom-content-link'>JAMIYAT</Link>
                                </li>
                                <li className="header-bottom-content-item">
                                    <Link href="/" className='header-bottom-content-link'>FAN-TEXNIKA</Link>
                                </li>
                                <li className="header-bottom-content-item">
                                    <Link href="/" className='header-bottom-content-link'>SPORT</Link>
                                </li>
                                <li className="header-bottom-content-item">
                                    <Link href="/" className='header-bottom-content-link'>NUQTAYI NAZAR</Link>
                                </li>
                            </ul>
                            <div className="header-bottom-content-icons">
                                <Link href='/' className="header-bottom-content-icons-item">
                                    <FaFacebookF className='header-bottom-content-icons-link' />
                                </Link>
                                <Link href='/' className="header-bottom-content-icons-item">
                                    <BsYoutube className='header-bottom-content-icons-link' />
                                </Link>
                                <Link href='/' className="header-bottom-content-icons-item">
                                    <FaTwitter className='header-bottom-content-icons-link' />
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
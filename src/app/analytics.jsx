import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Google Analytics-ni sozlash va to'g'ridan-to'g'ri trekkerni ishga tushirish
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID)
    ReactGA.pageview(window.location.pathname + window.location.search)

    // Sahifa o'zgarishi xaqida ma'lumotlarni Google Analytics-ga yuborish
    const handleRouteChange = (url) => {
      ReactGA.pageview(url)
    }

    // Sahifa o'zgarganda ma'lumotlarni yangilab turish
    router.events.on('routeChangeComplete', handleRouteChange)

    // Komponent o'chirilib tushganda uni bartaraf etish
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Cardstext from '../components/Cardstext'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Navbar />
      <Header />
      <Cards />
      <Cardstext />
      <Testimonials />
      <Footer />

    </div>
  )
}

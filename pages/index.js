import Head from 'next/head'
import Header from '/components/core/header'
import Footer from '/components/core/footer'
import Hero from '/components/blocks/hero'
import Introduction from '/components/blocks/introduction'
import Processes from '/components/blocks/processes'
import Simple from '/components/blocks/simple'
import Manager from '/components/blocks/manager'
import Transform from '/components/blocks/transform'
import Banner from '/components/blocks/banner'
import Why from '/components/blocks/why'
import Quotes from '/components/blocks/quotes'
import Demo from '/components/blocks/demo'

export default function Home() {
  return (
    <div>
      <Head>
        
        <title>Personio. The People Operating System.</title>
        <meta name="description" content="Personio is a holistic HR software for companies from 10 - 2,000 employees. No hoops, no hype, just great HR. Learn more today." />

        {/** OpenGraph */}
        <meta property="og:title" content="Personio. The People Operating System." />
        <meta property="og:description" content="Personio is a holistic HR software for companies from 10 - 2,000 employees. No hoops, no hype, just great HR. Learn more today." />
        <meta property="og:image" content="/assets/design/personio-og.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.personio.com" />
        <meta property="og:site_name" content="Personio" />

        {/** Favicons */}
        <link rel="icon" href="/assets/favicon/favicon.svg" />
        <link rel="mask-icon" href="/assets/favicon/favicon.svg" color="#000000" />
        <link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon shortcut" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/** Smartphone Tab Color & Other Meta Data */}
        <meta name="theme-color" content="#FFFFFF" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

      </Head>

      <Header />

      <main>
        <Hero />
        <Introduction />
        <Processes />
        <Simple />
        <Manager />
        <Transform />
        <Banner />
        <Why />
        <Quotes />
        <Demo />
      </main>
      
      <Footer />

    </div>
  )
}

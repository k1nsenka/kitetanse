import Header from '../components/Header'
import Menu from '../components/Menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Menu />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp


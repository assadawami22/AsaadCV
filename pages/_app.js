import '@/styles/globals.css'
import {Nunito} from '@next/font/google'

const lato = Nunito({
  subsets:['latin'],
  weight: [ '300'],
})
export default function App({ Component, pageProps }) {
  
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  )
}

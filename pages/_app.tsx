import '../styles/globals.css'
import dynamic from "next/dynamic";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
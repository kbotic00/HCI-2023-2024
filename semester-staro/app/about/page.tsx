import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutBox from './AboutBox'
import FaqsBox from './FaqsBox'
import MoreQBox from './MoreQBox'


export default function Main() {
  return (
    <>
      <Header/>
      <AboutBox/>
      <FaqsBox/>
      <MoreQBox/>
      <Footer/>
    </>
  )
}

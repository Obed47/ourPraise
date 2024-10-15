import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {motion} from 'framer-motion'
import Headline from './headline'
import Title from './titleAndText'
import Devices from './devices'
import Categories from './categories'
import AOS from 'aos'
import 'aos/dist/aos.css';
function App() {
useEffect(()=>{
  AOS.init()
},[])
  return (
    <>
     <Headline/>
     <Title/>
     <Devices/>
     <Categories/>
    </>
  )
}

export default App

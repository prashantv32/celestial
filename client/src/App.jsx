

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {
  const [apod,setApod] = useState(null) 

  const fetchRandom = async ()=>{
    const start = new Date("1995-06-16")
    const end = new Date()  // today
    const randomMs = start.getTime() + Math.random() * (end.getTime() - start.getTime())
    const randomDate = new Date(randomMs).toISOString().split("T")[0]
    try{
      const response = await axios.get(`http://localhost:3000/apod/random?date=${randomDate}`)
    setApod(response.data)
    }catch(error){
      console.log(error)
    }
    

  }

  useEffect(()=>{
    //define async fxn inside
    const fetchToday = async ()=>{
      try{
        const response = await axios.get("http://localhost:3000/apod")
      setApod(response.data)
      }catch(error){
        console.log(error)
      }
      
    }
    fetchToday()
  },[])


  return (
    <>
    <Header apod={apod}/>
    <MainContent apod={apod}  fetchRandom={fetchRandom}/>
    <Footer />
    </>
  )
}

export default App

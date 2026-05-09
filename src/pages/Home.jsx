import React, { useState } from 'react'
import Header from '../components/Header'
import AppDownload from '../components/AppDownload'


function Home() {
    const[category, setCategory]= useState("All")
          return (
            <div>
                <Header />
               <AppDownload/>
            </div>
        )
}

export default Home
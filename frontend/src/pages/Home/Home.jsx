import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import SiteUnderContruction from '../../components/SiteUnderContrucrion/SiteUnderContruction'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
      {/* <SiteUnderContruction/> */}
    </div>
  )
}

export default Home

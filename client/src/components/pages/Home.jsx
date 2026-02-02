import React from 'react'
import Layout from '../common/Layout'
import Hero from '../common/Hero'
import FeaturedCourses from './FeaturedCourses'
import FeaturedCategories from './FeaturedCategories'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCategories/>
      <FeaturedCourses />
    </Layout>
  )
}

export default Home

import React from 'react'
import NewHome from './rtechnosysNew/NewHome'
import AboutSectionNew from './rtechnosysNew/AboutSectionNew'
import OurServicesNew from './rtechnosysNew/OurServicesNew'
import WhyChooseUsNew from './rtechnosysNew/WhyChooseUsNew'
import TeamSectionNew from './rtechnosysNew/TeamsectionNew'
import Testimonials from './rtechnosysNew/Testimonials'
import Contact from './rtechnosysNew/Contact'
import BlogSectionNew from './rtechnosysNew/BlogSectionNew'
import FooterNew from './rtechnosysNew/FooterNew'
import ProjectsSectionNew from './rtechnosysNew/ProjectsSectionNew'
import BlogPage from './CaseStudiesDetails/BlogPage'
import Navbar from './rtechnosysNew/Navbar'
const Home = () => {
  return (
   <>
    <NewHome/>
   <AboutSectionNew/>
   <OurServicesNew/>
   <WhyChooseUsNew/>
   <ProjectsSectionNew/>
  
   <Testimonials/>
   <Contact/>
   <BlogSectionNew/>
   <FooterNew/>
   </>
  )
}

export default Home
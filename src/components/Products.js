import React from 'react'
import NavbarProjects from './NavbarProjects'
import FooterNew from './rtechnosysNew/FooterNew'
import AssignmentSection from './AssignmentSection'
import BlogSectionNew from './rtechnosysNew/BlogSectionNew'

const Products = () => {
  return (
   <div className='bg-white'>
   <NavbarProjects/>
   <AssignmentSection/>
   <BlogSectionNew/>
   <FooterNew/>
   </div>
  )
}

export default Products
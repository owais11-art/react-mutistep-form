import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Main } from '../styled-components/Main'
import Navbar from '../components/Navbar'
import { data } from '../data/site-data'
import BottomNav from '../components/BottomNav'

const DefaultLayout = () => {
  const pathname =  useLocation().pathname.length > 1 ? 
                    useLocation().pathname.slice(1) : 
                    useLocation().pathname
  let next = null
  let prev = null
  let isCurrentPagePathname = false
  data.navigation.forEach((nav, index, array) => {
    if(nav.path === pathname){
      isCurrentPagePathname = true
      if(array[index - 1]) prev = array[index - 1].path
    }
    if(isCurrentPagePathname && nav.path !== pathname){
      next = nav.path
      isCurrentPagePathname = false
    }
  })
  return (
    <Main bgUrl={data.backgrounds}>
      <section className="mobile-hero">
        <Navbar isMobileNav={true} />
      </section>
      <section className="main">
        <div className="sidebar">
          <Navbar isMobileNav={false} />
        </div>
        <div className="page-content">
          <Outlet />
        </div>
      </section>
      <BottomNav navTabs={{next, prev}} />
    </Main>
  )
}

export default DefaultLayout
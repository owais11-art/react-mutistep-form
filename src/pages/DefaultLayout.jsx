import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Main } from '../styled-components/Main'
import Navbar from '../components/Navbar'
import { data } from '../data/site-data'
import BottomNav from '../components/BottomNav'
import { useBottomNavigators } from '../useBottomNavigators'

const DefaultLayout = () => {
  const { pathname } = useLocation()
  const { next, prev } = useBottomNavigators(pathname)
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
      <BottomNav className="mobile-bottom-nav" next={next} prev={prev} />
    </Main>
  )
}

export default DefaultLayout
import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainFooter, MainHeader } from '../components/layouts'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-700 px-1 sm:px-0">
      <MainHeader />
      <Outlet />
      <MainFooter />
    </div>
  )
}

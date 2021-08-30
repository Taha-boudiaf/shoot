import React, { lazy, Suspense } from 'react'

const Home = lazy(() => import('./Home'))

export const HomePage = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Home />
  </Suspense>
)

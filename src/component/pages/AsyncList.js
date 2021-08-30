import React, { lazy, Suspense } from 'react'
import Loading from '../layout/Loading'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const NotFound = lazy(() => import('./NotFound'))

export const HomePage = () => (
  <Suspense fallback={<Loading />}>
    <Home />
  </Suspense>
)

export const AboutPage = () => (
  <Suspense fallback={<Loading />}>
    <About />
  </Suspense>
)

export const NotFoundPage = () => (
  <Suspense fallback={<Loading />}>
    <NotFound />
  </Suspense>
)

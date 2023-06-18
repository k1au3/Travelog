import React, { lazy, Suspense} from 'react';
import './styles/app.css'
import { trendingData } from "./data/data";


const Hero = lazy(() => import('./components/hero'));
const Page2 = lazy(() => import('./components/activities'));
const Trending = lazy(() => import('./components/trending'));
const Destinaion = lazy(() => import('./components/destination'));
const Newsletter = lazy(() => import('./components/newsletter'))
const Contact = lazy(() => import('./components/contact'));
const Footer = lazy(() => import('./components/footer'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Page2 />
      <Trending Data={trendingData} />
      <Destinaion />
      <Newsletter />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;

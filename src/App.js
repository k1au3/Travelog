import React, { lazy, Suspense} from 'react';
import './styles/app.css'
import { trendingData } from "./data/data";


const Hero = lazy(() => import('./components/hero'));
const Page2 = lazy(() => import('./components/activities'));
const Trending = lazy(() => import('./components/trending'));
const Destinaion = lazy(() => import('./components/destination'));

function App() {
  return (
    <Suspense fa  llback={<div>Loading...</div>}>
      <Hero />
      <Page2 />
      <Trending Data={trendingData} />
      <Destinaion />
    </Suspense>
  );
}

export default App;

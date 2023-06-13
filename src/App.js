import React, { lazy, Suspense} from 'react';
import './styles/app.css'
import { trendingData } from "./data/data";


const Hero = lazy(() => import('./components/hero'));
const Page2 = lazy(() => import('./components/activities'));
const Trending = lazy(() => import('./components/trending'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Page2 />
      <Trending Data={trendingData} />
    </Suspense>
  );
}

export default App;

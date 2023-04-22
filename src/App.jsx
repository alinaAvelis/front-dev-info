
import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './blocks/header';
import Home from './pages/home';

function App() {
  return (
    <Suspense fallback={"Loading..."}>
    <Router>
        <div className="page_container">
            <Header />
            <main className='container'>
              <Routes>
                <Route exact path="/" element={<Home /> } />

              </Routes>
            </main>
          </div>
        </Router>
  </Suspense>
  );
}

export default App;

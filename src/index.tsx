import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import Resume from './Resume/Resume'
import Porto from './Porto/Porto'
import './index.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Porto />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

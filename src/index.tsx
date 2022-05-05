import { Routes, Route, HashRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import Resume from './Resume/Resume'
import Porto from './Porto/Porto'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Porto />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

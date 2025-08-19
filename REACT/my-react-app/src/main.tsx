import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Practice from './practice.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      {/* <App /> */}
      <Practice />
    </BrowserRouter>
  </>
)

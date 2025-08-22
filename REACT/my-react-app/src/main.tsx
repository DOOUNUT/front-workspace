import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Practice from './practice.tsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './03.global.context/2.Redux/store/store.ts'

createRoot(document.getElementById('root')!).render(
  <>
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/* <Practice /> */}
    </BrowserRouter>
  </Provider>
  </>
)

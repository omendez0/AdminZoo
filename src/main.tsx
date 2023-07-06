import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AdminZoo } from './AdminZoo'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <AdminZoo/>
  </BrowserRouter>

)

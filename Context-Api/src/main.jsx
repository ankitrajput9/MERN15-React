
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { contextProvider } from './Context.jsx'

createRoot(document.getElementById('root')).render(
<contextProvider>
  <App />
</contextProvider>
  
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store/store.jsx'
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router"
  import { ToastContainer} from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<BrowserRouter>
<QueryClientProvider client={queryClient} >
    <App />
    <ToastContainer />
</QueryClientProvider>
</BrowserRouter>
  </Provider>
)

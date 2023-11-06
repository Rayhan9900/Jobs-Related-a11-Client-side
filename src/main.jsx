import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <QueryClientProvider client={queryClient}>
        <div className='max-w-7xl mx-auto'>
          <RouterProvider router={router} />
          <Toaster />
        </div>
      </QueryClientProvider>
    </AuthProvider>

  </React.StrictMode>,
)

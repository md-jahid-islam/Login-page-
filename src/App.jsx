
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import { ToastContainer } from 'react-toastify'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/'element =  {<LoginPage/>} />
        <Route path='/registerpage'element =  {<RegisterPage/>} />

      </Route>
    )
  )

  return (
    <>
     <ToastContainer />

    <RouterProvider router={route} />

    </>
  )
}

export default App

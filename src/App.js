import './App.css';
import Gold from './navbar/Gold';
import Login from './navbar/Login';
import Logo from './navbar/Logo';
import More from './navbar/More';
import Navbar from './navbar/Navbar';
import Portfolio from './navbar/Portfolio';
import Screener from './navbar/Screener';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";



function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Navbar/><Logo/></>
    },
    {
      path : "/portfolio",
      element : <><Navbar/><Portfolio/></>
    },
    {
      path : "/gold",
      element : <><Navbar/><Gold/></>
    },
    {
      path : "/screener",
      element : <><Navbar/><Screener/></>
    },
    {
      path : "/more",
      element : <><Navbar/><More/></>
    },
    {
      path : "/login",
      element : <><Navbar/><Login/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router}>
        <Navbar/>
      </RouterProvider>
    </>
  );
}

export default App;

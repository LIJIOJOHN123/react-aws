import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import List from './components/List';
import Details from './components/Details';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import TestComponent from './components/Test';
import Register from './components/Register';
import AboutUs from './components/About';
import PrivateRouter from './components/PrivateRouter';
import RegisteHeader from './components/RegisterHeader';

function App() {
  const routers = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <List />,
        },
        {
          path:"/register",
          element:<RegisteHeader><Register/></RegisteHeader>
        },
        {
          path:"/aboutus",
          element:<PrivateRouter><AboutUs/></PrivateRouter>
        },
        {
          path:"/test",
          element:<TestComponent/>
        },
      ]
    },
    {
      path:"/book",
      element:<Layout/>,
      children: [
        {
          path: "/book",
          element: <List />,
        },
        {
          path:"/book/test",
          element:<TestComponent/>
        }
      ]
    }
  ])
  return (
<div>
  <RouterProvider router ={routers}/>
</div>
  );
}

export default App;

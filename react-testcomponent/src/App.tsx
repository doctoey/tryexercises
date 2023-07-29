import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { IntroToComponentTesting } from '../src/intro-to-component-testing';

function App() {

  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route index element={<IntroToComponentTesting/>}/>,
      )
  )

  return (
      <>
        <RouterProvider router={router}/>
      </>
  );

}

export default App

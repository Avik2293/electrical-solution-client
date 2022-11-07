
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className="App p-1 border-8 border-cyan-500">
      <RouterProvider router={routes}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

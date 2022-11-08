
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

const img = "https://media.istockphoto.com/id/1339952254/vector/simple-set-of-car-parts-and-car-service-related-vector-line-illustration.jpg?s=612x612&w=0&k=20&c=b-kACes_6QuqMcAMDCM3Acico2bPR6briRgu-lyQ5pE=";

function App() {
  return (
    <div className="App p-2" style={{ backgroundImage: `url(${img})` }}>
      <RouterProvider router={routes}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

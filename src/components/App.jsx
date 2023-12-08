import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { CarList} from 'components/CarList';
import { Favorites } from 'pages/Favorites';


export const App = () => {
  return (
    <div
    className="app-container"
    >
     
  
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<CarList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
   
  );
};

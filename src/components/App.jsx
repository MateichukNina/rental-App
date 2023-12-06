import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Catalog } from 'pages/Catalog';
import { Favorites } from 'pages/Favorites';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     
  
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
   
  );
};

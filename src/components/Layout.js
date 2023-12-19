import { Outlet} from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul className='nav'>
          <li>
            <Link className='link' to="/">Home</Link>
          </li>
          <li>
            <Link className='link' to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link className='link' to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );}
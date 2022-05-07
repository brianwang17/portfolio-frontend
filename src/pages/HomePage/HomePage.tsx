import React from 'react';
import logo from '../../assets/logo.svg';
import { ExampleComponent } from '../../components';
import { HomePageType } from './types';
import style from './HomePage.module.scss';


const HomePage: React.FunctionComponent = (props: HomePageType) => {
  return (
    <>
      <div className={style['HomePage']}>
        <header className={style['HomePage-header']}>
          <img src={logo} className={style['HomePage-logo']} alt="logo" />
          <p>
            Edit <code>src/pages/HomePage/HomePage.tsx</code> and save to reload.
          </p>
          <a
            className={style['HomePage-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div><div>
        <ExampleComponent />
      </div>
    </>
  );
}

export default HomePage;

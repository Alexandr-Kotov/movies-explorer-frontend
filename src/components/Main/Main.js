import React from 'react';
import { Promo } from "../Promo/Promo";
import { NavTab } from '../NavTab/NavTab';
import { AboutProject } from '../AboutProject/AboutProject';

export const Main = () => {
  return (
    <main className="main">
      <Promo />
      <NavTab />
      <AboutProject />
    </main>
  )
}
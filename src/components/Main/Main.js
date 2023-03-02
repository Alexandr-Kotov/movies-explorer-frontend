import React from 'react';
import { Promo } from "../Promo/Promo";
import { NavTab } from '../NavTab/NavTab';

export const Main = () => {
  return (
    <main className="main">
      <Promo />
      <NavTab />
    </main>
  )
}
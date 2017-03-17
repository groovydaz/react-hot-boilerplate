import React from 'react';
import {Counter2} from './Components';

export default function Layout({ children }) {
  return (
    <div>
      <h1>Widget</h1>
      <Counter2 />
    </div>
  );
}

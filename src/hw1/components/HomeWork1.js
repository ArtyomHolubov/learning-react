import React from 'react';
import ProductTable from './ProductTable';
import HomeWorkDescription from './HomeWorkDescription';
import Descriptions from '../../data/hw.json';

function HomeWork1() {
  return (
    <div id="hw1">
      <h1>Home Work 1</h1>
      <HomeWorkDescription data={Descriptions.hw1.description}></HomeWorkDescription>
      <h3>The goods presented in the table are taken from here <a href="https://rozetka.com.ua/phones-mp3-gps/c80257/sort=rank/" target="_blank" rel="noopener noreferrer">https://rozetka.com.ua/phones-mp3-gps/c80257/sort=rank/</a></h3>
      <ProductTable />
    </div>
  );
}

export default HomeWork1;
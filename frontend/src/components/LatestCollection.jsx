import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Titel from './Titel';

const LatestCollection = () => {

    const {products}=useContext(ShopContext);
    console.log(products)
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Titel text1={'LATEST'} text2={'COLLECTIONs'}/>
        </div>
    </div>
  )
}

export default LatestCollection
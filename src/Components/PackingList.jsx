import React from 'react';
import { ItemList } from './ItemList';

export const PackingList = () => {


   
    
  return (
    <>
    <div>
        <ItemList/>
        <div className='buttons'>
        <select value={sortOption} onChange={(e)=>handleSort(e.target.value)}>
          <option value="">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button>Clear List</button>
      </div>
    </div></>
    
  )
}

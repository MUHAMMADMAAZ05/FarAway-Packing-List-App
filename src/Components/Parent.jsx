import React, { useState } from 'react';
import Form from '../Components/Form'; 
import  ItemList  from '../Components/ItemList';
import  Stats  from '../Components/Stats';

const Parent = () => {
    const [sharedlist,setSharedList]=useState([
    { item: 'Luggage', quantity: 2, isCompleted: false },
    { item: 'Ehraam', quantity: 2, isCompleted: false },
    { item: 'Slippers', quantity: 1, isCompleted: true },
    { item: 'Hand Carry', quantity: 1, isCompleted: true },
    { item: 'Passport', quantity: 1, isCompleted: false },
    { item: 'Visa', quantity: 1, isCompleted: false },
  ])
  

  // console.log(sharedlist,"==>shared items")
  
  const clearList = () => setSharedList([]);

  return (
    <div>
      <Form  setSharedList={setSharedList} list={sharedlist} />
      <ItemList  list={sharedlist} onClear={clearList}  setSharedList={setSharedList}/>
      <Stats list={sharedlist}/>
      
    </div>
  );
};

export default Parent;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSquare, faSquareCheck, faXmark } from '@fortawesome/free-solid-svg-icons'


export const ItemList = ({ list,onClear,setSharedList}) => {
  const[sortOption,setSortOption]=useState("")

  // console.log(list,"==>list")

  function completeTickHandler(index){
    const copyoflist=[...list]
    if(copyoflist[index].isCompleted){
      copyoflist[index].isCompleted = false
    }else{
      copyoflist[index].isCompleted = true
    } 
    setSharedList(copyoflist)      
  }

  function deleteItemHandler(index){
    console.log("Delete ho rha ho")
    const copyoflist=[...list]
    copyoflist.splice(index,1)
    setSharedList(copyoflist)
  }

  function handleSort(option){
    console.log("Sort per JA rha ho")
    setSortOption(option)
    console.log(option,"==>Sort option")
    const copyoflist2=[...list]
    if(option=='description'){
      copyoflist2.sort((a,b)=>a.item.localeCompare(b.item))
    }else if(option=="packed"){
      copyoflist2.sort((a,b)=>b.isCompleted-a.isCompleted)
    }
    setSharedList(copyoflist2)
    }
 
  
    return (
    <div>
      <h3>Received in ItemList:</h3>
      {list.length > 0 ? (      
        <div>
          {list.map((item, index) => (
            // square box
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              
            }}>
            <FontAwesomeIcon onClick={() => completeTickHandler(index)}
             icon={item.isCompleted ? faSquareCheck : faSquare} />
            <p style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}> 
              {item.quantity} × {item.item}</p>
            <FontAwesomeIcon onClick={() => deleteItemHandler(index)} 
            icon={faXmark} style={{ color: '#ff6347', cursor: 'pointer' }} />
            </div>
          ))}
        </div>
      ) : (
        <p>No items added yet.</p>
      )}
      <div className='buttons'>
        <select value={sortOption} onChange={(e) => handleSort(e.target.value)}>
          {/* <option value="">Sort by Input Order</option> */}
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
};

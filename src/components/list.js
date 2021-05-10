import React from 'react';

const List = ( listItems ) => {
  return (
    <div className='listItem'>
    <li>
      <p>Name: {listItems.name}</p>  
      <p>Email: {listItems.email} </p> 
      <p>Start Date: {listItems.occupationDate}</p>
      <p>End Date: {listItems.occupationEndDate}</p> 
      <p>Phone Number: {listItems.phoneNumber} </p> 
    </li>    
    </div>
  )
}

export default List;
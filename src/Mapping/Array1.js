import React from 'react'
import ListItem from './ListItem';

const Array1 = () => {
    const Arr1=[1,2,3,4,5,6,7,8,9,0];
    const Ar2=[1,'hello',true];
  return (
    <div>
        <h1>Array1</h1>
        <ListItem data={Arr1} value={Ar2}/>
        </div>
  )
}

export default Array1
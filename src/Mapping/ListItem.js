import React from 'react'

const ListItem = (props) => {
    console.log("props=======>",props)
   
  return (
    <div>
        <h1>
            ListItem 
            <ol>
            {
            props.data.map((list,index)=>
            (
                <li key={index}>{list}</li>
            ))
            }

            </ol>
            {
                props.value.map((list)=>
                (
                    <li>{list}</li>
                ))
            }
            </h1>
           
            
            </div>
  )
}

export default ListItem
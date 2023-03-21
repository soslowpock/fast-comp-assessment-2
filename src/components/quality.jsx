import React from "react";



const Quality = (props) => {
  const {color, name} = props.data

  return <span className={'m-1 badge badge-' + color}>{name}</span>
    
    
 
}

export default Quality


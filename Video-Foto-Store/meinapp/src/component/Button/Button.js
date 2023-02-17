import React from 'react';
import './Button.css'
export default function Button(props) {
console.log(props);
  return (
    
      <button  onClick={props.onClick} className={` button ${props.className}`}> {props.label} {props.icon} </button>

      // onClick={props.onClick} wir Exportieren onClick als Props für Component Button 

      // className={` button ${props.className}`} wir Exportieren className als Props und wir haben className gennant für alle  Component Button  und haben wir mit feste stayling für alle buttun 

      // {props.label} wir Exportieren label als Props für Component Button 
    
  );
}

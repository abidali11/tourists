import React ,{useState} from "react"
import './button.css'


const Button =(props)=>{
    const [buttons,setButtons]=useState([
        {
            id:"1",
            name:"Learn more"

        },
        {
            id:"2",
            name:"submit"
        },
        {
            id:"3",
            name:"register"
        },
        {
            id:"4",
            name:"sign"
        }


    ])
    return(
       <button className={props.styles}>{props.name}</button>
            // buttons.map((button)=>(
            //     <button className="button">{button.name}</button>
            // ))
        
    )
}


export default Button;
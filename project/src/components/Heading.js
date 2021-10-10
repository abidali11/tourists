import React ,{useState} from 'react'


const Heading = () =>{

const [item,setItem]=useState([
    {
        id:"1",
        name:"Welcome"
    },
    {
        id:"2",
        name:"Contact Us"
    },
    {
        id:"3",
        name:"About Us"
    }
])
    return(
        
    item.map((it)=>(
        <h3>{it.name}</h3>
    ))
    )
}

export default Heading;
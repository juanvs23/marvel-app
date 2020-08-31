import React,{useState,useContext} from 'react'
import {FunctionalsContent} from '../../context/Context'



const StartComponent=({id})=>{
    const {getStars}= useContext(FunctionalsContent)
const [activeStar,setActiveStar]=useState(false)



    const handlerStar=(e)=>{
        if(activeStar===false){
         setActiveStar(true)
         getStars(true)
        }else{
         setActiveStar(false)
         getStars(false)
        }
     }
     let starTrigger = activeStar ? 'fa fa-star':'fa fa-star-o';
 return(<div onClick={handlerStar} ><i className={starTrigger}></i></div>)

}
export default StartComponent
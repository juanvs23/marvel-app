import React,{useState,useContext, useEffect} from 'react'
import {FunctionalsContent} from '../../context/Context'



const StartComponentSlave=({id})=>{
    const {stars,starList,getList}= useContext(FunctionalsContent)
    const [activeStar,setActiveStar]=useState(false)

    const handlerStar=(e)=>{
       if(activeStar===false){
        setActiveStar(true)
         
       }else{
        setActiveStar(false)
       }
    }
    useEffect(()=>{
        if(stars){
            setActiveStar(true) 
         }else{
            setActiveStar(false)
         }
    },[stars])
    let starTrigger = activeStar ? 'fa fa-star':'fa fa-star-o';
return(<div onClick={handlerStar} ><i className={starTrigger}></i></div>)

}
export default StartComponentSlave
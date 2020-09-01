import React,{useState,useContext, useEffect} from 'react'
import {FunctionalsContent} from '../../context/Context'



const StartComponentSlave=({id})=>{
    const {stars,starList,getList}= useContext(FunctionalsContent)
    const [activeStar,setActiveStar]=useState(false)

    const handlerStar=(e)=>{
       if(activeStar===false){
        setActiveStar(true)
        getList([...starList,id])
       }else{

        setActiveStar(false)
        let idLocator=starList.indexOf(id)
        let list=starList

        delete list[idLocator] 
        console.log(list)
        
       }
    }
    useEffect(()=>{
        if(stars){
            const activar=starList.find(active=>{return active===id})
            if(activar!==undefined)
            setActiveStar(true) 
         }else{
            setActiveStar(false)
         }
    },[stars,id,starList])
    let starTrigger = activeStar ? 'fa fa-star':'fa fa-star-o';
return(<div onClick={handlerStar} ><i className={starTrigger}></i></div>)

}
export default StartComponentSlave
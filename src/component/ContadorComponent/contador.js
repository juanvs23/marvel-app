import React,{useState,useContext,useRef} from 'react'
import styled from 'styled-components'
import {FunctionalsContent} from '../../context/Context'

const ContainerWrapper=styled.div`
display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 84px;
    font-size:20px;
    color:#A8A8A8;
    button i.fa {
        font-size: 25px;
    }
    input.control {
        appearance: none;
        border: none;
        background: transparent;
        width: 30px;
        font-size: 23px;
        text-align: center;
        font-weight: 700;
        transition:0.5s 0.3s;
        outline: none !important;
        border-bottom:2px solid transparent;
        color:#A8A8A8;
    }
    input.control:hover,input.control:focus{
        border-bottom:2px solid #A8A8A8;
    }
    button {
        appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
        padding: 10px;
        outline: none;
        color:#A8A8A8;
    }
`;

const ContadorComponent=({limit,total})=>{
    const { getOffSet}= useContext(FunctionalsContent)
    const [counter,setCounter]=useState(1)
    const totalHeros = Math.floor(total/limit)
    const counterRef = useRef(1)
      
const handlerChange=(e)=>{

 if (counterRef.current.value>0 && counterRef.current.value<= totalHeros) {
    getOffSet(counterRef.current.value*8)
 }
}
    const handlerAdd=()=>{
       if(counter*8<=totalHeros){
            setCounter(counter+1)
           
            getOffSet(counter*8)
    }
       }
       const handlerSustrap=()=>{
        if(counter>=1){
        setCounter(counter-1)
       
        getOffSet(counter/8)
        }
       }
      
    return(
        <ContainerWrapper>
             
                <button type="button" onClick={handlerSustrap}> <i className="fa fa-chevron-left"></i> </button>
                <div className="counterText">
                <input type="text" className="control" ref={counterRef} onChange={handlerChange} placeholder={counter}/>
                    <span> de </span>
                    <span> {totalHeros} </span>
                </div>
                <button type="button" onClick={handlerAdd}> <i className="fa fa-chevron-right"></i> </button>
                
        </ContainerWrapper>
    )
}
export default ContadorComponent


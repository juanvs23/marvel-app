import React,{useState,useContext,useRef} from 'react'
import styled from 'styled-components'
import {FunctionalsContent} from '../../context/Context'

const ContainerWrapper=styled.div`
`;

const ContadorComponent=({limit,total})=>{
    const { offSet,getOffSet}= useContext(FunctionalsContent)
    const [counter,setCounter]=useState(0)
    const totalHeros = Math.floor(total/limit)
    const ref = useRef(offSet)
      
const handlerChange=(e)=>{

}
    const handlerAdd=()=>{
       if(counter*8<=totalHeros){
            setCounter(counter+1)
            console.log(counter*8)
            getOffSet(counter*8)
    }
       }
       const handlerSustrap=()=>{
       
        setCounter(counter-1)
       
       }
      
    return(
        <ContainerWrapper>
             
                <button type="button" onClick={handlerSustrap}> <i className="fa fa-chevron-left"></i> </button>
                <div className="counterText">
                <input type="text" className="form-control mb-2 mr-sm-2" const ref={ref} onChange={handlerChange} placeholder={counter}/>
                    <span> de </span>
                    <span> {totalHeros} </span>
                </div>
                <button type="button" onClick={handlerAdd}> <i className="fa fa-chevron-right"></i> </button>
                
        </ContainerWrapper>
    )
}
export default ContadorComponent
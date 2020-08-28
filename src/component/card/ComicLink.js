import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {FunctionalsContent} from '../../context/Context'



const ComicLink=({Comic})=>{
    const {useFetch}= useContext(FunctionalsContent)
    console.log(Comic)

    

      const comicContent= useFetch('https://dog.ceo/api/breeds/image/random',{})
      console.log(comicContent)
    return null
}

export default ComicLink
import React from 'react'
import styled from 'styled-components'



const StarWrapper=styled.div`
width:12%;
font-size:1.5rem;
color:#A8A8A8;
`;

const StarComponent=()=>{
    return(

        <StarWrapper>
            <i className="fa  fa-star-o"></i>
        </StarWrapper>
    );
}
export default StarComponent;
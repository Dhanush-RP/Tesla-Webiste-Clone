import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>Model-S</h1>
            <p>Order Online for touchless delivery</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
                Custom Order
            </LeftButton>
            <RightButton>
                Existing Inventory
            </RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image: url('/images/model-3.jpg');
    display: flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align : center;
`

const ButtonGroup = styled.div`
        display : flex;
        margin-bottom : 30px;
        @media (max-width: 768px){
            flex-direction: column;
        }
`
const RightButton= styled.div`
        background-color : white;
        height:40px;
        width: 256px;
        color:black ;
        display:flex;
        justify-content :center;
        align-items : center;
        border-radius : 100px;
        text-transform: uppercase;
        font-size :12px;
        cursor:pointer;
        margin:8px
        opacity : 0.65;
`
const LeftButton = styled(RightButton)`
        background-color : rgba(23,26,32,0.8);
        opacity : 0.85;
        color:white;
       
`

const DownArrow = styled.img`
    margin-top : 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x : hidden;
`

const Buttons = styled.div`

`

import React from 'react';
import styled from 'styled-components';
const Button = props => {

  return (
    <Layout onClick={props.click} width={props.width} height={props.height} bgColor={props.bgColor}>
      {props.children}
    </Layout>

  )
};



export default Button;

const Layout = styled.div`
  width:${props => props.width + "px"};
  height:${props => props.height + "px"};
  background:${props => props.bgColor};
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:rgba(223,32,45);
  border-radius: 6px;
  color:white;
  font-size:14px;

  &:hover{
    cursor: pointer;
    background-color:rgba(178,31,40);
  }

`
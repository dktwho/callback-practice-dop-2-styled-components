import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    name: string
    callBack: () => void
}
export const Button = ({name, callBack}: ButtonPropsType) => {
    const callBackHandler = () => {
        callBack()
    }
    return (
        <Btn onClick={callBackHandler}>{name}</Btn>
    );
};


export const Btn = styled.button`
  background-color: darkgray;
  border-radius: 1px;
  border: 2px solid gray;
  color: gray;
  margin: 1px;
  color: black;
`

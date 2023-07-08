import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}
const Button = ({name, callBack}: ButtonPropsType) => {

    const callBackHandler = () => {
        callBack()
    }

    return (
        <button onClick={callBackHandler}>{name}</button>
    );
};

export default Button;
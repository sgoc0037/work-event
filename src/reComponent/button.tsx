import React, { ReactNode } from 'react';

interface buttonType {
    onClick: ()=> void;
    children: ReactNode | void;
}

export const Button: React.FC<buttonType> = ({ onClick,children }) => {

    return <button
    onClick={()=> onClick()}
    >{children}</button>

}

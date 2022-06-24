import React from 'react';
import "./Title.css";

interface Props {
    text: string;
}

export function Title(props: Props): JSX.Element {
    return(
        <>
         <h1>{props.text}</h1>
        </>
    )
}
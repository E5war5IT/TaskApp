import React  from 'react';
import "./createTaskButton.css";

export function CreateTaskButton<JSX, IntrinsicElements>(): JSX.Element {
    return (
     <React.Fragment>
         <button className='createTask' type='button'>create</button>
     </React.Fragment>
    )
}
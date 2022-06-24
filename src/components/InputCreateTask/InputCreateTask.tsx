import "./InputCreateTask.css";

type type = string;
type placeholder = string;

interface Props {
 type: type;
 onClick?: (e: React.MouseEvent) => void;
 placeholder? : placeholder;
}

export function Input(props: Props): JSX.Element {
    return(
        <input type={props.type} onClick={props.onClick} placeholder={props.placeholder} className='react-input'/>
    )
}
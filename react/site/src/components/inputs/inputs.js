import { Input } from "./styled"

export default function Inputs(props) {
    return (
        <Input>
            <label for="input"> {props.label} </label>
            <input type="text" id="input" name="input"/>
        </Input>
       
    )
}
export default function Inputs(props) {
    return (
        <div className="inputs">
            <label for="input"> {props.label} </label>
            <input type="text" id="input" name="input"/>
        </div>
       
    )
}
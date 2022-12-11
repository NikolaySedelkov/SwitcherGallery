import RadioType from "./RadioType.js"
function Fieldset({data, change}){
    const name = "switch-radio";
    return (
        <fieldset name={name}>
        {
            data.map(el=>
                <RadioType key={name+"-"+el} title={el} change={change}/>
            )
        }
        </fieldset>
    )
}

export default Fieldset;
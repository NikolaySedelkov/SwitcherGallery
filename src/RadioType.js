function RadioType({title, change, _class}){
    const refresh = () => {
        change(title);
    }

    return (
        <div className={_class}>
            <input id={"switch-radio-"+title} type="radio" onClick={refresh} name="group2"/>
            <label htmlFor={"switch-radio-"+title}>{title}</label>
        </div>
    )
}

export default RadioType;
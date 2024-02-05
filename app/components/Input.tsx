function Input(prop:{inputWith:string, inputType:string, isReadOnly:boolean, value:string|number, setValue: (value: any) => void}) {
    return ( 
        <>
            <input className={`h-12 pl-5 focus:outline-none focus:ring focus:ring-blue-hover ${prop.inputWith}`} type={prop.inputType} readOnly={prop.isReadOnly} value={prop.value} onChange={(e) => prop.setValue(e.target.value)} />
        </>
     );
}

export default Input;
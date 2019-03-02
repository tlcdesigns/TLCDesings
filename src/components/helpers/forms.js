import React from 'react';
export default ({disabled="", input, key="",  placeholder="" ,min = "", max = "", type = "text", size = "s12", label, meta: {touched, error}}) => (
    <div  key={key} className={`input-field col ${size}`}>
        <input disabled={`${disabled}`} placeholder={placeholder} min={min} max={max} key={key} autoComplete={"off"} {...input} id={input.name} type={type} />
        <label htmlFor={input.name}>{label}</label>
        <p className="errorMessageText red-text text-darken-2">{touched && error}</p>
    </div>
)
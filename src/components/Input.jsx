import React from 'react';
import Checkmark from "../assets/svg/checkmark.svg";

function Input({ errors, label, customClass, type, id, formDataAttributes, errorPlaceholder }) {
    const hasError = errors[id];
    const errorMessage = hasError ? errors[id].message : errorPlaceholder;

    return (
        <div className={`input-wrapper ${hasError ? 'error-active' : 'error-inactive'}`}>
            <label htmlFor={id} className="font-medium text-primary mb-[5px] text-sm block">
                {label}
            </label>
            <input
                className={`block text-base font-medium text-primary px-2.5 h-[42px] border border-[#808A93] rounded-[6px] mb-[5px] ${customClass ? customClass : ""}`}
                type={type}
                id={id}
                {...formDataAttributes}
            />
            <p className={`flex items-center gap-x-[7px] text-sm ${hasError ? 'error-active' : 'error-inactive'}`}>
                {hasError ? <img src={Checkmark} alt="Error" /> : <img src={Checkmark} alt="Valid" />}
                {errorMessage}
            </p>
        </div>
    );
}

export default Input;

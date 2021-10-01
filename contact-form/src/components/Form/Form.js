import React, { useState } from 'react'
import FormInput from './FormInput/FormInput'
import Axios from 'axios'
import { useForm } from 'react-hook-form'

import './Form.css'

export default function Form() {
    
    const [isVisible, setIsVisible] = useState(false)
    
    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        Axios.post('http://localhost:3001/add-event', data).then((response) => {
            if(response) {
                setIsVisible(true)

                setTimeout(() => {
                    setIsVisible(false)
                }, 3000)
            }    
        })
        reset({
            firstName: '',
            lastName: '',
            email: '',
            date: ''
        })
    }

    return (
        <>
            <form data-testid="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <FormInput 
                    type="text" 
                    name="firstName"       
                    label="First name"
                    id="firstName"
                    placeholder="e.g. John"
                    error={errors.firstName && "First name is required"}
                    register={register}
                />
                <FormInput 
                    type="text" 
                    name="lastName"
                    label="Last name"
                    id="lastName"
                    placeholder="e.g. Johnson"
                    error={errors.lastName && "Last name is required"}
                    register={register}
                />
                <FormInput 
                    type="email" 
                    name="email"
                    label="Email"
                    id="email"
                    placeholder="e.g. john@johnson.com"
                    error={errors.email && "Invalid email address"}
                    register={register}
                />
                <FormInput 
                    type="date" 
                    name="date"
                    label="Date"
                    id="date"
                    error={errors.date && "Date is required"}
                    register={register}
                />
                <input data-testid="submitBtn" type="submit" className="submitBtn" value="Submit" />
            </form>
            
            <div className={`submitMsg ${isVisible ? "visible" : ""}`}>
                <h2>Thank you!</h2>
                <p>Your event has been added to database</p>
            </div>
        </>
    )
}

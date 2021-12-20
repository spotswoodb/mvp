import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createPlayer } from '../../redux/PlayerActions'


export default function NewPlayerForm() {
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            batter_id: ""
        }
    })

    const dispatch = useDispatch()
    
    const onSubmit = (data) => {
        data.preventDefault()
        console.log(data)
    }

    
    


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", {
                    required: {
                    value: true,
                    message: "Name is required"
                    }
                })} 
                name="name"
                placeholder="Player Name" 
                />
            <input type="number" {...register("batter_id", {
                    valueAsNumber: true,
                    validate: (value) => {
                        return value.toString().length >= 5
                    }
                })} 
                name="batter_id"
                placeholder="Batter ID"
                />
            {errors.batter_id && <p>Batter ID must be 5 numbers or greater</p>}
            <input type="submit" />
        </form>
    )
}

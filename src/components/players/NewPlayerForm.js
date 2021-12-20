import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createPlayer } from '../../redux/PlayerActions'
// import Dropzone from 'react-dropzone';

export default function NewPlayerForm() {
    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name', { required: true })} placeholder="Player Name" />
            <input {...register('batter_id', { minLength: 5 })} placeholder="Batter ID" />
            {errors.batter_id && <p>Batter ID must be 5 numbers or greater</p>}
            <input type="submit" />
        </form>
    )
}

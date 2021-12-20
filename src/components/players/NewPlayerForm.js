import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createPlayer } from '../../redux/PlayerActions'


export default function NewPlayerForm() {
    
    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm({
        defaultValues: {
            name: "",
            batter_id: ""
        }
    })

    const dispatch = useDispatch()
    

    const onSubmit = (data) => {
        // data.preventDefault();       
        dispatch(createPlayer({name: data.name, batter_id: data.batter_id}))
    }
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                name: "",
                batter_id: ""
            });
        }
    }, [formState, reset]);
    


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
            {isSubmitSuccessful}
            <input type="submit" />
        </form>
    )
}

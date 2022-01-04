import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createPlayer } from '../../redux/PlayerActions'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function NewPlayerForm() {
    
    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm({
        defaultValues: {
            name: "",
            batter_id: ""
        }
    })

    const dispatch = useDispatch()
    

    const onSubmit = (data) => {
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
        <div className="d-flex justify-content-center align-items-center form-container">
            <div className="row row-cols-lg-auto g-3 align-items-center">
                <Form onSubmit={handleSubmit(onSubmit)}><br></br>
                    <Form.Group>
                        <div className="col-12">
                            <Form.Label htmlFor="inputName" className="col-form-label">Player Name</Form.Label>
                            <Form.Control className="name-input" id="inputName" {...register("name", {
                                    required: {
                                    value: true,
                                    message: "Name is required"
                                    }
                                })} 
                                name="name"
                                placeholder="Freeman, Freddie" 
                                />
                                <br></br>
                        </div>
                        <div className="col-12">
                            <Form.Label htmlFor="inputBatterId" className="col-form-label">Batter ID</Form.Label>
                            <Form.Control className="batter-id-input" type="number" {...register("batter_id", {
                                    valueAsNumber: true,
                                    validate: (value) => {
                                        return value.toString().length >= 5
                                    }
                                })} 
                                name="batter_id"
                                placeholder="12345"
                                />
                                <br></br>
                        </div>
                        {errors.batter_id && <p>Batter ID must be 5 numbers or greater</p>}
                        {isSubmitSuccessful}
                        <Button className="submit-button" value="submit" type="submit">Submit</Button>
                        <br></br>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

import {useState,useEffect, useContext} from 'react';
import {Form,Button} from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';//import {Swal} from 'sweetalert2';
import UserContext from '../UserContext';

export default function AddGame(){

	const navigate = useNavigate();

    const {user} = useContext(UserContext);

	const [name,setName] = useState("");
	const [description,setDescription] = useState("");

	function createGame(e){ 

		e.preventDefault();

		let token = localStorage.getItem('token');
		console.log(token);

		fetch('http://localhost:4000/games',{ 

			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({

				name: name,
				description: description

			})
		})
		.then(res => res.json())
		.then(data => {

            if (data.error === "Failed to save the game") { 

				Swal.fire({

					icon: "error",
					title: "Unsuccessful Game Creation",
					text: data.message

				})

			} else {

				Swal.fire({

					icon:"success",
					title: "Game Added"

				})

				navigate("/games");
			}

		})

        setName("")
        setDescription("")
	}

	return (

            (user.id)
            ?
            <>
                <h1 className="my-5 text-center">Add Game</h1>
                <Form onSubmit={e => createGame(e)}>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required value={name} onChange={e => {setName(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" required value={description} onChange={e => {setDescription(e.target.value)}}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="my-5">Submit</Button>
                </Form>
		    </>
            :
            <Navigate to="/tasks" />

	)


}

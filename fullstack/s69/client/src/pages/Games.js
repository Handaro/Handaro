// pages/Games.js
import { useEffect, useState, useContext } from 'react';
import GameCard from '../components/GameCard';
import UserContext from '../UserContext';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // add

export default function Games() {

	const { user } = useContext(UserContext); 
	const [games, setGames] = useState([]);


	const fetchData = () => {


		fetch('http://localhost:4000/games/all', {
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			}
		})
		.then(res => res.json())
		.then(data => {

		    if (typeof data.message !== "string") {
		    	// setGames(data.tasks);
                setGames(data.games);
		    } else {
		    	setGames([]);
		    }

		});
	}

    useEffect(() => {

		fetchData()

    }, []);


	return(
		<>
            {
            	user.id !== null
                ?
                        games.length > 0

                        ?
                        <>  
                        <h1 className='text-center mt-5'>Games</h1>
                        <Row> 
                            
                                {   

                                    games.map(game => { 

                                        return (
                                            <Col md={3} key={game._id}> 
                                                <GameCard game={game} />
                                            </Col>
                                        )
                                        
                                    })
                                }   

                        </Row>

                        </>
                        :
                        <>
                            <h1>No Games</h1>
                        </>
                :
                <>
                    <h1 className="text-center">You are not logged in</h1>
                    <div className="d-flex justify-content-center">
                    <Link className="btn btn-primary" to={"/login"}>Login to View</Link>
                    </div>
                </>

        	}
        </>
	)
}


import axios from "axios";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import MovieNavBar from "../component/MovieNavBar";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

const AddMovie = () => {


    const movie_name_referance = useRef();
    const rating_referance = useRef();
    const desc_referance = useRef();
    const history = useHistory();


    const addMoviehandler = async (e)=>{
        e.preventDefault();


        const movieData ={
            movie_name: movie_name_referance.current.value,
            rating: rating_referance.current.value,
            description: desc_referance.current.value,
        };


        try {
            const response = await axios.post("https://api.dynoacademy.com/test-api/v1/movies",movieData,{
                timeout:10000,
            });

            alert(response.data.message);
            history.replace("/")
        } catch (error) {

            if(error.response){
                alert(error.response.data.errors[0].message)
            }else{
                alert("error movie adding ! try again later")

            }
            


            
        }

        

    };
    return(
        <>
       <MovieNavBar />
       <Container>
        <br/>
        <br/>
        

        <form onSubmit={addMoviehandler}>


        <Form.Group className="mb-3" >
        <Form.Label>Movie Name:</Form.Label>
        <Form.Control type="text" placeholder="Movie Name" ref={movie_name_referance} />
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Rating:</Form.Label>
        <Form.Control type="number" placeholder="Rating" ref={rating_referance}  />
        
      </Form.Group>

        
      <FloatingLabel controlId="floatingTextarea2" label="Description">
        <Form.Control
          as="textarea"
          placeholder="Description"
          style={{ height: '100px' }}
          ref={desc_referance}
        />
      </FloatingLabel>
      <Button className="mt-3" variant="dark" type="submit" >Add movie</Button>

        
          </form>
        </Container>
        </>
    )
}
export default AddMovie
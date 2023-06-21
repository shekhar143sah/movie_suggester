import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import MovieNavBar from "../component/MovieNavBar";
import { Button, Card, Container } from "react-bootstrap";

const  ViewMovies = () => {
 
    const getParms = useParams();
   
    const getID = getParms.id;

    const [movieData, setMovieData] = useState({});

    const getSingleMovieInfo = async() =>{
        
        try {
            const response = await axios.get(`https://api.dynoacademy.com/test-api/v1/movie/${getID}`);

            setMovieData(response.data.singleMovieData)
        } catch (error) {
            alert("Error Occured in API datas")
        }
    }

    useEffect(()=>{
        getSingleMovieInfo();
        console.log("hweuhj")
    },[])

    return<>
    
    <MovieNavBar />
    <Container>
    
    
    view movies by id = {getID}
    
   

<br />
<span style={{fontWeight:"bold"}}>
Movie Details: <br />
</span>
   
   <Card className="w-25"><img src={movieData.image} alt="not found"/></Card>
   
  <h3 className="text-info mt-4">{movieData.name}</h3> 
   
    Information:- {movieData.info};
    <br/><br/><br/>

   <Card className="p-2">{movieData.desc}</Card>
   <Card style={{fontWeight:"bold",color:"gray ", margin:"20px 0 20px", padding:"10px 0 10px 5px"}}>Rating:- {movieData.rating}</Card>
   
   <Link to="/" ><Button className="bg-dark mb-4">Go Home</Button></Link>
    
    </Container>
    </>

}
export default ViewMovies;
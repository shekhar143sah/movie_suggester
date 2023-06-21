import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import MovieNavBar from "../component/MovieNavBar";
import SingleMovie from "../component/singleMovie";

const Index = () =>{

const [movies, setMovies] = useState([]);

const[searchMovieText,setSearchMovieText] = useState("");


const [searchErrortext, setSearchErrortext] = useState(false);

  const [isError, setIsError] = useState(false);

  const [errorText,setErrorText] = useState();




  useEffect(()=>{
    fetchMovies();
  },[])
  
  useEffect(()=>{

    
      const fetchTimer  = setTimeout(()=>{
        if(searchMovieText && searchMovieText.length > 2){
        fetchMovies();
         } else if (searchMovieText.length < 1){
          fetchMovies();
        }else{
          setSearchErrortext("Please enter at least 3 chartacter to searching");
        }
      },800);
    
     //cleanup function
      return(()=>{
        clearTimeout(fetchTimer);
       })

  console.log("search working...")
  },[searchMovieText]);


  const fetchMovies = async () => {

    //fetch resources....
    // console.log("calling API....")
     
    setSearchErrortext("");
    try {
      const response = await axios.get(`https://api.dynoacademy.com/test-api/v1/movies?search=${searchMovieText}`);
      setMovies(response.data.moviesData);
      setIsError(false);


    } catch (error) {
      // alert("Cannot Find Movies Data")
      setIsError(true);
      setErrorText("Cannot get movies info!")

    }


    console.log(movies);

    // console.log(response);
    // console.log("finished.")







    //  const promise = new Promise((resolve,reject)=>{
    //   const response = axios.get("https://api.dynoacademy.com/test-api/v1/movies");

    //   resolve(response);

    //  })
    //  promise.then((result)=>{
    //   console.log(result);
    //   console.log("finished.")

    //  })
    //  .catch((error)=>{

    //  })


  };


  return (


    <div >
      <MovieNavBar />

      <Container>
      <div>

      <Form.Group className="m-3" >
        
        <Form.Control type="text" placeholder="Type Movie Title For Searching "  onChange={(e)=> setSearchMovieText(e.target.value)}  />
        
      </Form.Group>


        <span style={{color:"red"}}>{searchErrortext}</span>
      </div>
    <span style={{fontSize:"20px", fontWeight:"bold"}}>
      Suggested Movies are :- 
</span>

      <br />

      {
        isError ? (<>
          <div style={{ background: "red", color: "#fff", padding: "10px", margin: "10px", textAlign: "center" }}>{errorText}</div>
        </>
        ) : (<>
        
        <div style={{ background: "#e7e7e7", padding: "10px", margin: "5px" }}>
          <Row>
        {
          
          movies.map(el => (
            <SingleMovie data={el} />
            


          ))
        }
        </Row>
      </div>
        </>
        )}

</Container>
    </div>

  );

}
export default Index;
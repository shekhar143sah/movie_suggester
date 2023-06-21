import { Button, Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const SingleMovie = (props) =>{


    return (
        <>
        <Col key={props.data.id} >
        <Card style={{ width: '16rem', minHeight:"715px" }}>
      <Card.Img variant="top" src={props.data.image} style={{maxWidth:"254px"}} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
         {props.data.info}
        </Card.Text>
        <Link to={`/view_movie/${props.data.id}`}>
        <Button variant="dark">View Details</Button>
        </Link>
      </Card.Body>
    </Card>


        {/* <div key={props.data.id}>
              <div >
              <br/> <br/>
                <img src={props.data.image} alt="movie_image not found" style={{height:"200px"}} />
                <br />
                <Link to={`/view_movie/${props.data.id}`}>
               <span style={{fontWeight:"bold"}}>{props.data.name}</span> 
               </Link>
               <br/>
               <span style={{fontWeight:"bold"}}>Info:-</span> {props.data.info}
               <br/>
               <span style={{fontWeight:"bold"}}>Rating:- {props.data.rating}  </span>
               
              


              </div>
            </div> */}
            </Col>
        </>

    )

}
export default SingleMovie
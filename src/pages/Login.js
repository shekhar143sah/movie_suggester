import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MovieNavBar from "../component/MovieNavBar";
import { Button, Container, Form, Modal } from "react-bootstrap";


const Login = () => {

    const email = useRef();
    const password = useRef();
 
const [modalShown , setModalShown] = useState(false);
const [modalText , setModalText] = useState("");

    
const history = useHistory();

    const loginHandler = async(e)=>{
        e.preventDefault();


        const loginData = {
            email: email.current.value ,
             password:password.current.value



    
        }

        try {
            const response = await axios.post("https://api.dynoacademy.com/test-api/v1/login",loginData,{
                timeout:10000,
            });

            const getAccessToken = response.data.accessToken;
            localStorage.setItem("accessToken" , getAccessToken);

            if(response.data.status === "success"){
                // alert("Login sucessfully, redirecting....");
                setModalShown(true);
                setModalText("Login sucessfully, redirecting....")

            }

            setTimeout(()=>{ 
                history.replace("/")
            },1000)


          
           
        } catch (error) {

            if(error.response){
                // alert(error.response.data.errors[0].message)
                setModalShown(true);
                setModalText(error.response.data.errors[0].message)
            }else{
                // alert("error movie adding ! try again later")
                setModalShown(true);
                setModalText("Unknown Error Ocurred! Try Again Later")

            }
            


            
        }

        

    };


    
 
    return (
        <>
      <MovieNavBar />
      <Container>
        <br />
        <br />
        <form  onSubmit={loginHandler}>

        
        <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email} />
        <Form.Text className="text-muted">
         For login You must be used email as: dyno@gmail.com and password as: 123456
        </Form.Text>
      </Form.Group>

     

<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password} />
      </Form.Group>
        
      <Button variant="dark" type="submit">
        Login
      </Button>
       
       
       </form>
       </Container>

       <Modal show={modalShown} onHide={()=>{setModalShown(false)}}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body> {modalText} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setModalShown(false)}}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={() => {}}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
        </>
    )


}

export default Login 
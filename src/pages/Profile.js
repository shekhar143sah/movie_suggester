import axios from "axios";
import { useEffect, useState } from "react";
import {  useHistory } from "react-router-dom/cjs/react-router-dom.min"
import MovieNavBar from "../component/MovieNavBar";
import { Button, Container, Modal } from "react-bootstrap";

const Profile = () =>{


    const [userData, setUserData] = useState({});
    const history = useHistory ();

    const [modalShown, setModalShown] =useState(false)


    useEffect(()=>{
        getProfile();

    },[]);


    const getProfile = async() =>{

        const getAccessToken = localStorage.getItem("accessToken");

        try {
            const response = await axios.get("https://api.dynoacademy.com/test-api/v1/me",{
                timeout:10000,
                headers:{
                    Authorization : `Bearer ${getAccessToken}`

                }
            });

            console.log(response)

            setUserData(response.data.data)
        } catch (error) {

            if(error.response){
                alert(error.response.data.errors[0].message)
            }else{
                alert("error movie adding ! try again later")

            }
            


            
        }


    }

const onLogOut = () =>{


    setModalShown(true);
    // localStorage.removeItem("accessToken");
    // history.replace("/")

}

    return (
        <>

       

        

        <MovieNavBar />
       <Container >
      <br/>
     
       <b style={{textAlign:"center",color:"green"}}>welcome to my profile</b> 

        <br/>
        name: {userData.name}
        <br/>
        email: {userData.email}
        
        <br/>
        country: {userData.country}

<br />
   
        <Button className="mt-2" variant="danger" onClick={onLogOut} type="button">Logout</Button>
    </Container>

    <Modal show={modalShown} onHide={()=>{setModalShown(false)}}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body> Are You Sure You Want To LogOut </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setModalShown(false)}}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => 
          {localStorage.removeItem("accessToken");
               history.replace("/")}}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
       
        
        </>
    )
}

 export default Profile
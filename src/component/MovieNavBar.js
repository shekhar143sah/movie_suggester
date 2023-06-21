import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const MovieNavBar = () => {

    return (
        <Navbar className="bg-dark ">
        <Container>
          <Navbar.Brand  href="#home"> <Link className="text-light" to="/" >Movies Suggester</Link> </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end gap-2">
            <Navbar.Text>
            <Link  className="text-light" to="/add" >Add Movies</Link> 

            </Navbar.Text>
            <Navbar.Text>
{
  localStorage.getItem("accessToken") ? <> <Link   to="/profile" className="text-light"> Profile</Link></> :<> <Link className="text-light" to="/login"> LogIn</Link></>
}

            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

}
export default MovieNavBar
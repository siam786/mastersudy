import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import "./Header.css"

const Header = () => {
  const {user,logOut} = useAuth();
  const {photoURL} = user;
 
  return (
    <div>
      <Navbar bg="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
          <Nav.Link as={Link} to="/home"> <img class="img-fluid w-75 logo" src="https://i.ibb.co/Y28J1Kf/logo.png" alt="" /></Nav.Link>
           

          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end menu-text">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            {/* <Nav.Link as={Link} to="/weoffer">Our Services</Nav.Link> */}
            {user?.email?
            <Nav.Link as={Link} to="/addservice">Add Items</Nav.Link>:
            <div style={{display:"none"}}>
              <Nav.Link></Nav.Link>
            </div>
          }
          
          
          {user?.email?
            <Nav.Link as={Link} to="/MangaService">Manage Order</Nav.Link>:
            <div style={{display:"none"}}>
            <Nav.Link></Nav.Link>
          </div>
            }
         
          {user?.email?
            <Navbar.Text>
               <a class="text-white" href="#login">
                <img style={{width:"45px",borderRadius:"50%"}} src={photoURL}/>
              </a>
            </Navbar.Text>:
            <Navbar.Text></Navbar.Text>
            }
               {user?.email ? 
          <Button onClick={logOut} variant="light">Logout</Button>  :
          <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
          }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

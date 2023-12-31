
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { CharactersContext } from './CharactersContext'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
 

export const Header = ({favorites}) => {
  const navigate=useNavigate();
  const { setSearchTerm, handleSearchSubmit } = useContext(CharactersContext);
  const [localSearchTerm, setLocalSearchTerm] = useState('')

  const handleSearch = (event) => {
    const searchTermValue = event.target.value;
    setLocalSearchTerm(searchTermValue);
    setSearchTerm(searchTermValue);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearchSubmit(localSearchTerm);
    navigate('/search-results/')
  }

    return (
        <>
    <Navbar bg="dark" data-bs-theme="dark"expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as={Link} to="/">Rick and Morty</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="about/">About</Nav.Link>   
          <Nav.Link as={Link} to="characters/">Characters</Nav.Link>
          <Nav.Link as={Link} to="favorites/">Favorites {favorites.length} </Nav.Link>
          <Form className='d-flex' onSubmit={handleFormSubmit} > 
            <FormControl
            type='search'
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleSearch}
            value={localSearchTerm}
            />
            <Button type="submit">Search</Button>
          </Form>
            
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
);
}


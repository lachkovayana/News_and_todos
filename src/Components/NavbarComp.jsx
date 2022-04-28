import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import  ToDoComponent  from './pages/MainToDoContainer'
import  News  from './pages/MainNewsContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function NavbarComp () {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar bg='dark' variant={'dark'} expand='lg' className='px-4'>
            <Navbar.Brand href='/'>Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
              <Nav
                className='mr-auto my-2 my-lg-0'
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to='/news'>
                  News
                </Nav.Link>
                <Nav.Link as={Link} to='/todo'>
                  ToDoLists
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route exact path='/' element={<News />} />

            <Route exact path='/news' element={<News />} />

            <Route path='/todo' element={<ToDoComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

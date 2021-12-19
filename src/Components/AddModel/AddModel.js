import React, {useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'


function AddModel({handleAdd}){
    const [title, setTitle] = useState("")
    const [Url, setUrl] = useState("")
    const [rating, setRating] = useState("")
    const [year, setYear] = useState("")
    const HandleTitle = (e) =>{
        setTitle(e.target.value)
    }
    const HandlUrl = (e) =>{
        setUrl(e.target.value)
    }
    const HandlRating = (e) =>{
        setRating(e.target.value)
    }
    const HandlYear = (e) =>{
        setYear(e.target.value)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body> <Form>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                    Title
                                </Form.Label>
                                <Col sm="10">
                                    <input type="text" name="Title" onChange={HandleTitle}/>{title}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                    Url
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" name="url"  onChange={HandlUrl}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                    Rating
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" name="Rating"  onChange={HandlRating}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm="2">
                                 Year
                                </Form.Label>
                                <Col  sm="10">
                                    <Form.Control type="text" name="year" onChange={HandlYear}/>
                                </Col>
                            </Form.Group>
                        </Form>
                        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleAdd(title,Url,parseInt(rating),year)}}>
              Save 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AddModel

import React from 'react';
import {Container, Alert, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class ModalTeacher extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.show === true) {
            return <>
            <Modal
            show={this.props.show}
            onHide={() => this.props.closeModal()}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>Lecture information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <p><b>Subject:</b> {this.props.lectureTitle}
                            <br/>
                            <b>Date:</b> {this.props.lectureDate}
                            <br/>
                            <b>Begin time:</b> {this.props.lectureBeginTime.slice(0,5)}
                            <br/>
                            <b>End time:</b> {this.props.lectureEndTime.slice(0,5)}</p>
                        </Col>
                        <Col>
                            <Row>
                                <Button>Change to online</Button>
                            </Row>
                            <Row>
                                <Button variant="danger">Delete lecture</Button>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        {this.props.studentList.length === 0 ? 
                        <Alert variant="secondary">
                            No students booked.
                        </Alert>
                      :
                        <Accordion><div className="mb-1">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={this.props.elementId}>
                                Booked students
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={this.props.elementId}>
                                <Card.Body>{this.props.studentList.map((s) => <StudentRow key={s} name={s}/>)  }</Card.Body>
                                </Accordion.Collapse>
                            </Card></div>
                        </Accordion>
                      }
                    
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => this.props.closeModal()}>
                Close
                </Button>            
            </Modal.Footer>
            </Modal>
        </>
        } else {
            return <></>
        }
      }
}

function StudentRow(props) {
    return <div>{props.name}</div>
}

export default ModalTeacher;
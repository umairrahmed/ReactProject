import { Modal } from 'bootstrap';
import { Form } from 'formik';
import React, { Component } from 'react';
import { FormGroup, ModalBody, ModalHeader } from 'reactstrap';

function UpdateComment() {
    return ( 
        <Modal>
            <ModalHeader>Update Comment</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <input type="text"></input>
                    </FormGroup>
                    <FormGroup>
                        <button type='submit' color='primary'>Update</button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
     );
}

export default UpdateComment;
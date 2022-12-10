import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'


export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };

    }
    render() {
        return (
            <Modal fade={false} isOpen={this.props.visible} >
                <ModalHeader>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-success'>Add</button>
                    <button className='btn btn-danger' onClick={() => this.props.hide()}>Cancel</button>
                </ModalFooter>
            </Modal>
        )
    }
}

import React from 'react';
import Modal from 'react-modal';



const OptionModal = (props) =>(
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel= "Selected Option"
    onRequestClose={props.closeModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal_title" >Selected Option</h3>
    {props.selectedOption && <p className="modal_body">{props.selectedOption}</p>}
    <button onClick={props.closeModal} className="button">OK</button>
  </Modal>
)

export default OptionModal;
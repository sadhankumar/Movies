import React from 'react'
import { Modal } from 'react-bootstrap'

const ItemModal = ({ item}) => (
  <Modal bsSize="large">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-lg">Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Edit Item</h4>
    </Modal.Body>
    <Modal.Footer />
  </Modal>
)

export default ItemModal

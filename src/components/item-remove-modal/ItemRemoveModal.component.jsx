import React from "react";
import { Modal, Button } from "react-bootstrap";

const ItemRemoveModal = ({ show, handleClick }) => (
	<Modal show={show} onHide={handleClick}>
		<Modal.Header closeButton>
			<h3>Modal heading</h3>
		</Modal.Header>
		<Modal.Body>
			Do you really want to delete this item. After you can not recover it.
		</Modal.Body>
		<Modal.Footer>
			<Button variant='secondary' onClick={handleClick.bind(this, false)}>
				Close
			</Button>
			<Button variant='primary' onClick={handleClick.bind(this, true)}>
				Save Changes
			</Button>
		</Modal.Footer>
	</Modal>
);

export default ItemRemoveModal;

//LIBRARIES
import React from "react";
import { Accordion, Card } from "react-bootstrap";

import InputArea from "../../components/InputArea/InputArea.component";
import ContentArea from "../../components/ContentArea/ContentArea.component";

const AdminPanel = () => {
	return (
		<section className='admin-panel'>
			<h2>Control your store</h2>

			<div className='admin-panel__main'>
				<Accordion>
					<div className='admin-panel__accordion-item'>
						<Accordion.Toggle as={Card.Header} eventKey='0' className='admin-panel__toggle'>
							Add new items
						</Accordion.Toggle>
						<Accordion.Collapse eventKey='0' className='admin-panel__collapse'>
							<InputArea />
						</Accordion.Collapse>
					</div>
					<div className='admin-panel__accordion-item'>
						<Accordion.Toggle as={Card.Header} eventKey='1' className='admin-panel__toggle'>
							Edit existing items
						</Accordion.Toggle>
						<Accordion.Collapse eventKey='1' className='admin-panel__collapse'>
							<InputArea />
						</Accordion.Collapse>
					</div>
				</Accordion>
				<ContentArea />
			</div>
		</section>
	);
};

export default AdminPanel;

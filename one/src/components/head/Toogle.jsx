import { useState } from 'react';

// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Button from 'react-bootstrap/Offcanvas';
import { HiOutlineBars3 } from "react-icons/hi2";
import Bar from '../Bar';
import { Button, Offcanvas } from 'bootstrap/dist/js/bootstrap.min';

function Toogle() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <HiOutlineBars3 />
        hello
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Bar />
          chgvjlk
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Toogle;
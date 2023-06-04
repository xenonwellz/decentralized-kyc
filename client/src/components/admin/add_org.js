import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Addorg(props) {
  useEffect(() => {
    document.title = 'Admin | Add Org'
    props.cleanState()
    // eslint-disable-next-line
  }, [])
  return (
    <Container>
      <div className="p-5 mt-4 bg-gray-100 rounded-xl">
        <Form onSubmit={props.handleSubmit} style={{ width: "80%", margin: "auto" }}>
          <h2 className="mb-4 text-2xl text-gray-700">Add Organization</h2>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="orgName" value={props.orgName} onChange={props.handleChange} />
          </Form.Group>
          <br />
          <Form.Group >
            <Form.Label>ethAddress:</Form.Label>
            <Form.Control type="text" name="ethAddress" value={props.ethAddress} onChange={props.handleChange} />
          </Form.Group>
          <br />
          <button className="px-6 py-2 font-semibold text-white rounded-full bg-sky-800" type="submit">Add Organization</button>
          <div style={{ margin: "auto", paddingTop: "10px", color: "green" }}>
            {props.error ? <p style={{ color: "red" }}>{props.errormsg}</p> :
              props.loading ? <p style={{ color: 'blue' }}>In Transaction...</p> :
                props.added && <p>Org Added</p>}
          </div>
        </Form>
      </div>
    </Container >
  );
}
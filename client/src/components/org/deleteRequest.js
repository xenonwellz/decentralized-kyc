import React, { useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Deleterequest(props) {
  useEffect(() => {
    document.title = "Delete Request";
    props.cleanState();
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <div className="p-5 mt-4 bg-gray-100 rounded-xl">
        <Form style={{ width: "80%", margin: "auto" }} onSubmit={props.onDeleteRequest}>
          <h2 className="mb-4 text-2xl text-gray-700">
            Delete KYC Request
          </h2>
          <Form.Group>
            <Form.Label>Request Number</Form.Label>
            <Form.Control
              type="text"
              name="req_count"
              onChange={props.handleChange}
            ></Form.Control>
          </Form.Group>
          <br />
          <button className="px-6 py-2 font-semibold text-white bg-red-700 rounded-full" type="submit">Submit</button>
          <div className="mt-4">
            {props.loading ? (
              <p style={{ color: "blue" }}>Deleting KYC Request...</p>
            ) : props.error ? (
              <p style={{ color: "red" }}>{props.errormsg}</p>
            ) : (
              props.del && <p>Customer KYC Request Deleted</p>
            )}
          </div>
        </Form>
      </div>
    </Container>
  );
}

import React, { useEffect } from "react";
import { Form, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Requestkyc(props) {
    useEffect(() => {
        document.title = 'Request KYC'
        props.cleanState()
        // eslint-disable-next-line
    }, [])
    return (
        <Container>
            <div className="p-5 mt-4 bg-gray-100 rounded-xl">
                <Form style={{ width: "80%", margin: "auto" }} onSubmit={props.onRequest}>
                    <h2 className="mb-4 text-2xl text-gray-700">Request Customer KYC </h2>
                    <Form.Group>
                        <Form.Label style={{ marginBottom: 0 }}>Eth Address</Form.Label>
                        <Form.Control type="text" name="eth_address" onChange={props.handleChange}></Form.Control>
                    </Form.Group>
                    <br />
                    <button className="px-6 py-2 font-semibold text-white rounded-full bg-sky-700" type="submit">Request</button>
                    <div className="mt-4">
                        {props.loading ? <p style={{ color: 'blue' }}>Requesting Customer KYC...</p> :
                            props.error ? <p style={{ color: "red" }}>{props.errormsg}</p> : props.req && <p>Customer KYC Requested</p>}
                    </div>
                </Form></div>
        </Container>
    )
}
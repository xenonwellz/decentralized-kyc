import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form"
import 'bootstrap/dist/css/bootstrap.min.css'

const Removeorg = (props) => {
    useEffect(() => {
        document.title = 'Admin | Remove Org'
        props.cleanState()
        // eslint-disable-next-line
    }, [])
    return (
        <Container>
            <div className="p-5 mt-4 bg-gray-100 rounded-xl">
                <Form style={{ width: "80%", margin: "auto" }} onSubmit={props.removeOrg}>
                    <Form.Group>
                        <Form.Label>Eth Address:</Form.Label>
                        <Form.Control type="text" name='address' value={props.address} onChange={props.handleChange} />
                    </Form.Group>
                    <br />
                    <button className="px-6 py-2 font-semibold text-white bg-red-700 rounded-full" type="submit">Remove Organization</button>
                    <div style={{ margin: "auto", padding: "10px", color: "red" }}>
                        {props.error ? <p style={{ color: "red" }}>{props.errormsg}</p> :
                            props.loading ? <p style={{ color: 'blue' }}>In Transaction...</p> :
                                props.removed && <p>Org Removed</p>}
                    </div>
                </Form>
            </div>
        </Container>

    );

}
export default Removeorg
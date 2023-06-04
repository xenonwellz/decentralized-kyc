import React, { useEffect } from "react";
import { Form, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Addkyc(props) {
    useEffect(() => {
        document.title = 'Add KYC'
        props.cleanState()
        // eslint-disable-next-line
    }, [])
    return (
        <Container>
            <div className="p-5 mt-4 bg-gray-100 rounded-xl">
                <Form style={{ width: "80%", margin: "auto" }} onSubmit={props.handleSubmit}>
                    <h2 className="mb-4 text-2xl text-gray-700">Add new KYC </h2>
                    <Form.Group style={{ marginTop: "10px", }}>
                        <Form.Label style={{ marginBottom: 0 }}>Eth Address: </Form.Label>
                        <Form.Control type="text" name="eth_address" onChange={props.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "10px", }}>
                        <Form.Label style={{ marginBottom: 0 }}>Name: </Form.Label>
                        <Form.Control type="text" name="name" onChange={props.handleJsonChange}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "10px", }}>
                        <Form.Label style={{ marginBottom: 0 }}>Father's Name: </Form.Label>
                        <Form.Control type="text" name="fathername" onChange={props.handleJsonChange}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "10px", }}>
                        <Form.Label style={{ marginBottom: 0 }}>Mother's Name: </Form.Label>
                        <Form.Control type="text" name="mothername" onChange={props.handleJsonChange}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "10px", }}>
                        <Form.Label style={{ marginBottom: 0 }}>Phone Number: </Form.Label>
                        <Form.Control type="number" name="phone" onChange={props.handleJsonChange}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "10px", }}>
                        <Form.Label style={{ marginBottom: 0 }}>Temporay Address: </Form.Label>
                        <Form.Control type="text" name="taddress" onChange={props.handleJsonChange}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "10px", }}>
                        <Form.Label style={{ marginBottom: 0 }}>Permanent Address: </Form.Label>
                        <Form.Control type="text" name="paddress" onChange={props.handleJsonChange}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "10px", }}>
                        <Form.Label style={{ marginBottom: 0 }}>DOB: </Form.Label>
                        <Form.Control type="date" name="dob" onChange={props.handleJsonChange}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "10px", }}>
                        <Form.Label style={{ marginBottom: 0 }}>BVN: </Form.Label>
                        <Form.Control type="text" name="bvn" onChange={props.handleJsonChange}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: "10px", }}>
                        <Form.Label style={{ marginBottom: 0 }}>NIN: </Form.Label>
                        <Form.Control type="text" name="nin" onChange={props.handleJsonChange}></Form.Control>
                    </Form.Group>
                    <br />
                    <div className="flex items-start gap-4">
                        <label htmlFor="p_photo" className="w-1/3 text-center bg-white file rounded-xl">
                            <div className="p-2 pl-0 font-semibold text-center rounded-full" type="button">
                                <div className="mb-2">Passport Photo</div>
                                {props.p_photo ? <img alt="" className="rounded-xl" src={props.p_photo} /> : null}
                            </div>
                            <input className="hidden" accept=".png, .jpg, .jpeg" type="file" id="p_photo" name="p_photo" onChange={props.captureFile} />
                        </label>

                        <label htmlFor="citizenship_front" className="w-1/3 text-center bg-white file rounded-xl">
                            <div className="p-2 pl-0 font-semibold text-center rounded-full" type="button">
                                <div className="mb-2">National ID Front</div>
                                {props.citizenship_front ? <img alt="" className="rounded-xl" src={props.citizenship_front} /> : null}
                            </div>
                            <input className="hidden" accept=".png, .jpg, .jpeg" type="file" id="citizenship_front" name="citizenship_front" onChange={props.captureFile} />
                        </label>

                        <label htmlFor="citizenship_back" className="w-1/3 text-center bg-white file rounded-xl">
                            <div className="p-2 pl-0 font-semibold text-center rounded-full" type="button">
                                <div className="mb-2">National ID Back</div>
                                {props.citizenship_back ? <img alt="" className="rounded-xl" src={props.citizenship_back} /> : null}
                            </div>
                            <input className="hidden" accept=".png, .jpg, .jpeg" type="file" id="citizenship_back" name="citizenship_back" onChange={props.captureFile} />
                        </label>

                    </div>
                    <br />
                    <button className="px-6 py-2 font-semibold text-white rounded-full bg-sky-700" type="submit">Submit</button>
                    <div className="mt-4">
                        {props.loading ? <p style={{ color: 'blue' }}>Adding Customer KYC...</p>
                            : props.error ? <p style={{ color: "red" }}>{props.errormsg}</p> : props.added && <p style={{ color: "green" }}>Customer KYC Added</p>}
                    </div>
                </Form>
            </div>
        </Container>
    )
}
import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form"
import 'bootstrap/dist/css/bootstrap.min.css'
import OrgProfile from "../orgProfile";

const Vieworg = (props) => {
    useEffect(() => {
        document.title = 'Admin | View Org Details'
        props.cleanState()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {props.orgDetail ?
                <>
                    <Container>
                        <button className="px-6 py-2 mt-5 font-semibold text-white rounded-full bg-sky-600" onClick={props.cleanState}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Go Back</button>
                    </Container>
                    <OrgProfile orgDetail={props.orgDetail} />
                </> :
                <Container>
                    <div className="p-5 mt-4 bg-gray-100 rounded-xl">
                        <Form onSubmit={props.viewOrg} style={{ width: "80%", margin: "auto" }}>
                            <Form.Group>
                                <Form.Label>
                                    ethAddress:
                                </Form.Label>
                                <Form.Control type="text" name='address' value={props.address} onChange={props.handleChange} />
                            </Form.Group>
                            <br />
                            <button className="px-6 py-2 font-semibold text-white rounded-full bg-sky-800" type="submit">Search Organization</button>
                            <div style={{ margin: "auto", padding: "10px" }}>
                                {props.error && <p style={{ color: "red" }}>{props.errormsg}</p>}
                            </div>
                        </Form>
                    </div>
                </Container>
            }
        </>
    );

}
export default Vieworg
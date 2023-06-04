import React, { useEffect } from "react"
import Profile from "../profile"
import { Container } from "react-bootstrap"

export default function Viewdetail(props) {
    useEffect(() => {
        document.title = 'Your Details'
    })
    return (
        <>
            {props.error ? <p>{props.errormsg}</p> : props.custDetail &&
                <Container>
                    <div className="mt-4 bg-gray-100 rounded-xl p-5">
                        <Profile detail={props.custDetail} />
                    </div>
                </Container>}

        </>
    )
}
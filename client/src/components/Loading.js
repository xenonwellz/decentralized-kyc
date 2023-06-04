import React from 'react'
import { Container } from 'react-bootstrap';

function Loading() {
    return (
        <Container style={{ textAlign: "center", paddingTop: "30px" }}>
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
                <div className="w-10 h-10 border-4 rounded-full animate-spin border-y-sky-800 border-x-sky-200"></div>
            </div>
        </Container>
    )
}

export default Loading
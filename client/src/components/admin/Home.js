import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

const Home = ({ account }) => {

    useEffect(() => {
        document.title = "Admin | Home";
    }, []);

    return (
        <Container>
            <div className="bg-gray-100 rounded-xl p-3 container mt-4 cursor-pointer">
                <div className='mb-3'><b>Name: </b>Admin</div>
                <div><b>Eth Address: </b>{account}</div>
                <div className='mt-3'><b>Role: </b>Admin</div>
            </div>
        </Container>
    )
}

export default Home
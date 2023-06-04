import React from 'react'
import { Container } from 'react-bootstrap';

export default function OrgProfile(props) {
  return (
    <Container>
      <div className="bg-gray-100 rounded-xl p-3 container mt-4 cursor-pointer">
        <div className='mb-3'><b>Organization Name: </b>{props.orgDetail[0]}</div>
        <div><b>Organization  Eth Address: </b>{props.orgDetail[1]}</div>
      </div>
    </Container>
  )
}

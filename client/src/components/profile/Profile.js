import React, { Component } from "react";
import classes from "./Profile.module.css";
import axios from "axios";
import { decrypt } from "../../rsa/Rsa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

class Profile extends Component {
  verifiedIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="green"
        className="inline-block bi bi-patch-check-fill"
        viewBox="0 0 16 16"
      >
        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
      </svg>
    );
  };

  componentDidMount = () => {
    let d = Number(this.props.detail[5]);
    let n = Number(this.props.detail[6]);
    axios.get(`https://skywalker.infura-ipfs.io/ipfs/${this.props.detail[1]}`).then(
      (res) => {
        let de = decrypt(res.data, d, n);
        this.setState({ data: JSON.parse(de) });
      },
      (err) => {
        console.log(err);
      }
    );
    axios.get(`https://skywalker.infura-ipfs.io/ipfs/${this.props.detail[2]}`).then(
      (res) => {
        let de = decrypt(res.data, d, n);
        this.setState({ p_photo: de });
      },
      (err) => {
        console.log(err);
      }
    );
    axios.get(`https://skywalker.infura-ipfs.io/ipfs/${this.props.detail[3]}`).then(
      (res) => {
        let de = decrypt(res.data, d, n);
        this.setState({ front: de });
      },
      (err) => {
        console.log(err);
      }
    );
    axios.get(`https://skywalker.infura-ipfs.io/ipfs/${this.props.detail[4]}`).then(
      (res) => {
        let de = decrypt(res.data, d, n);
        this.setState({ back: de });
      },
      (err) => {
        console.log(err);
      }
    );
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      p_photo: "",
      front: "",
      back: "",
    };
  }
  render() {
    return (
      <div className={classes.bground}>
        <Container className="bg-white border shadow rounded-xl">
          <div className={classes.header}>
            <img src={this.state.p_photo} className={classes.pic} alt="" />
            <p className="flex items-center w-full gap-2 mt-2 justify-content-center">
              <b className="text-xl font-bold uppercase">{this.state.data.name}</b> <this.verifiedIcon />
            </p>
          </div>
          <div className={classes.boxes}>
            {/* <tr>
                <td>Name</td>
                <td>: {this.state.data.name}</td>
              </tr> */}
            <Container className="mt-2">
              <div className="flex">
                <div className="w-1/3 p-2 text-gray-900 border"><b className="text-gray-700">Father's Name: </b>{this.state.data.fathername}</div>
                <div className="w-1/3 p-2 text-gray-900 border"><b className="text-gray-700">Mother's Name: </b>{this.state.data.mothername}</div>
                <div className="w-1/3 p-2 text-gray-900 border"><b className="text-gray-700">Phone Number: </b>{this.state.data.phone}</div>
              </div>
            </Container>
            <Container className="mt-2">
              <div className="flex">
                <div className="w-1/3 p-2 text-gray-900 border"><b className="text-gray-700">Date of Birth: </b>{this.state.data.dob}</div>
                <div className="w-1/3 p-2 text-gray-900 border"><b className="text-gray-700">NIN: </b>{this.state.data.nin}</div>
                <div className="w-1/3 p-2 text-gray-900 border"><b className="text-gray-700">BVN: </b>{this.state.data.bvn}</div>
              </div>
            </Container>
            <Container className="mt-2">
              <div className="flex">
                <div className="w-1/2 p-2 text-gray-900 border"><b className="text-gray-700">Temporary Address: </b>{this.state.data.taddress}</div>
                <div className="w-1/2 p-2 text-gray-900 border"><b className="text-gray-700">Permanent Address: </b>{this.state.data.paddress}</div>
              </div>
            </Container>
            <Container className="mt-4">
              <b> <div className="pb-2">Govt. Issued Docs:</div></b>
              <Row>
                <Col><img
                  className={classes.govt}
                  src={this.state.front}
                  alt="front"
                />{" "}</Col>
                <Col><img
                  className={classes.govt}
                  src={this.state.back}
                  alt="back"
                />{" "}</Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}

export default Profile;

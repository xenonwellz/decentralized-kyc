import React, { Component } from "react";
import { Form, Container } from "react-bootstrap"
import Profile from "../profile";

export default class Viewkyc extends Component {
    componentDidMount = () => {
        document.title = "Customer Kyc"
    }

    getKyc = (event) => {
        event.preventDefault()
        this.props.kyc.viewKYC(this.state.cust_address, { from: this.props.account })
            .then(res => {
                this.setState({ cust_detail: res })
                this.setState({ value: true })
                this.setState({ error: false })
                console.log(res)
            }).catch(err => {
                if (err.message === "MetaMask Tx Signature: User denied transaction signature.") {
                    this.setState({
                        error: true,
                        errormsg: err.message
                    })
                }
                else {
                    this.setState({
                        error: true,
                        errormsg: err.data?.message ?? "Failed, An error occurred"
                    })
                }
            })
    }

    deleteKyc = (cust) => {
        this.props.kyc1.removeKYC(this.state.cust_address, { from: this.props.account })
            .then(res => {
                console.log(res)
                this.setState({ value: false })
            }).catch(err => {
                console.log(err)
            })
    }

    onChange = (event) => {
        this.setState({
            cust_address: event.target.value
        })
    }

    form = () => {
        return (
            <Container>
                <div className="p-5 mt-4 bg-gray-100 rounded-xl">
                    <Form style={{ width: "80%", margin: "auto" }} onSubmit={this.getKyc}>
                        <h2 className="mb-4 text-2xl text-gray-700">View Customer KYC </h2>
                        <Form.Group>
                            <Form.Label style={{ marginBottom: 0 }}>Eth Address</Form.Label>
                            <Form.Control type="text" name="cust_address" onChange={this.onChange}></Form.Control>
                        </Form.Group>
                        <br />
                        <button className="px-6 py-2 font-semibold text-white rounded-full bg-sky-700" type="submit">Submit</button>
                        {this.state.error && <div className="mt-4"><p style={{ color: 'red' }}>{this.state.errormsg}</p></div>}
                    </Form>
                </div>
            </Container>
        )
    }

    detail = () => {
        return (
            <Container>
                <div className="p-5 mt-4 bg-gray-100 rounded-xl">
                    <div className="flex justify-between w-4/5 mx-auto">
                        <button className="px-6 py-2 font-semibold text-white rounded-full bg-sky-700" onClick={() => {
                            this.setState({ value: false })
                        }}>Go Back</button>
                        <button className="px-6 py-2 font-semibold text-white bg-red-700 rounded-full" onClick={this.deleteKyc}>Delete</button>
                    </div>
                    <Profile detail={this.state.cust_detail} />
                </div>
            </Container>

        )
    }

    constructor(props) {
        super(props)
        this.state = {
            cust_address: '',
            cust_detail: {},
            value: false,
            error: false,
            errormsg: ''
        }
    }
    render() {
        return (
            <>
                {this.state.value ? this.detail() : this.form()}
            </>
        )
    }
}
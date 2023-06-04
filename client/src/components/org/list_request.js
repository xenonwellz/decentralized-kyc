import React, { Component } from "react";
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


export default class Listrequest extends Component {
    componentDidMount = () => {
        document.title = "List Request"
        this.props.kyc.listRequest({ from: this.props.account })
            .then(res => {
                this.setState({ list: res })
            }).catch(err => {
                this.setState({
                    error: true,
                    errormsg: err.data.msg
                })
            })
    }
    componentDidUpdate = () => {
        this.props.kyc.listRequest({ from: this.props.account })
            .then(res => {
                this.setState({ list: res })
            })
    }
    onChange = async (event, req_count) => {
        event.preventDefault();
        this.props.kyc1.deleteRequestOrg(req_count, { from: this.props.account })
        console.log(req_count)
    }
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            err: false,
            errmsg: ''
        };
    }
    table = () => {
        return (
            <div className="p-5 mt-4 bg-gray-100 rounded-xl">
                {this.state.list.length > 0 ? <table style={{ width: "80%", margin: "auto" }} responsive="sm">
                    <thead>
                        <tr>
                            <th className="p-2 pb-4">Request Number</th>
                            <th className="p-2 pb-4">Customer Address</th>
                            <th className="p-2 pb-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((person, index) => (
                            <tr key={person.req_count.toNumber()}>
                                <td className="p-3 bg-white border-gray-100 rounded-l-full border-y-4">{person.req_count.toNumber()}</td>
                                <td className="p-3 bg-white border-gray-100 border-y-4">{person.Address}</td>
                                <td className="pr-3 text-right bg-white border-gray-100 rounded-r-full border-y-4" style={{ width: "10%" }}>
                                    <button className="p-2 font-semibold text-red-600 rounded-full hover:bg-red-100 bg-red-50" onClick={(event) => { this.onChange(event, person.req_count.toNumber()) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))

                        }
                    </tbody>
                </table> : <div className="w-4/5 p-4 mx-auto font-semibold text-center bg-white rounded-full">
                    No Request Here yet.
                </div>
                }
            </div>
        )
    }
    render() {
        return (
            <Container>
                {this.state.error ? <p>{this.state.errormsg}</p> : this.table()}
            </Container>
        )
    }
}
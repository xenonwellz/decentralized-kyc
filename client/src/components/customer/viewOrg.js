import React, { Component } from "react"
import { Container } from "react-bootstrap"

export default class Vieworg extends Component {

    componentDidMount = () => {
        document.title = "View Organization"
        this.props.kyc.viewOrgWithAccess({ from: this.props.account }).then(res => {
            this.setState({ orgWithAccess: res })
        })

    }

    componentDidUpdate = () => {
        this.props.kyc.viewOrgWithAccess({ from: this.props.account }).then(res => {
            this.setState({ orgWithAccess: res })
        })
    }

    // const getOrgList = () =>{
    //     props.kyc.viewOrgWithAccess({from:props.account}).then(res=>{
    //         this.setState({orgWithAccess:res})
    //     })
    // }

    constructor(props) {
        super(props);
        this.state = {
            orgWithAccess: []
        }
    }
    render() {
        return (
            <Container>
                <div className="p-5 mt-4 bg-gray-100 rounded-xl">
                    {this.state.orgWithAccess.length > 0 ? <table style={{ width: "80%", margin: "auto" }} responsive="sm">
                        <thead>
                            <tr>
                                <th className="p-2 pb-4">Request Number</th>
                                <th className="p-2 pb-4">Customer Address</th>
                                <th className="p-2 pb-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orgWithAccess.map((org, index) => (
                                <tr key={index}>
                                    <td className="p-3 bg-white border-gray-100 rounded-l-full border-y-4">{index}</td>
                                    <td className="p-3 bg-white border-gray-100 border-y-4">{org}</td>
                                    <td className="pr-3 text-right bg-white border-gray-100 rounded-r-full border-y-4" style={{ width: "10%" }}>
                                        <button className="p-2 px-4 font-semibold text-red-600 rounded-full hover:bg-red-100 bg-red-50" onClick={() => {
                                            this.props.kyc1.revokeAccessKYC(org, { from: this.props.account })
                                                .then(res => {
                                                    console.log("deleted")
                                                })
                                                .catch(e => {
                                                    console.log(e)
                                                })
                                        }}> Revoke
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
            </Container>
        )
    }

}
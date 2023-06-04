import NavLayout from '../NavLayout'
import { NavLink } from 'react-router-dom'
import React from 'react'

function NavBar({ account }) {
    return <NavLayout account={account}>
        <div className='flex h-full gap-2 items-center'>
            <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to="/Organization" exact>Home</NavLink>
            <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to="/Organization/add">Add KYC</NavLink>
            <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to="/Organization/update">Update KYC</NavLink>
            <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to="/Organization/request">Request KYC</NavLink>
            <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to="/Organization/list">List Request</NavLink>
            <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to="/Organization/view">View KYC</NavLink>
            <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to="/Organization/delete">Delete Request</NavLink>
        </div>
    </NavLayout>
}

export default NavBar



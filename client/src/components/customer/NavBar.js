import React from 'react';
import { NavLink } from 'react-router-dom'
import NavLayout from '../NavLayout'

function NavBar({ account }) {
    return (
        <NavLayout account={account}>
            <div className='flex h-full gap-2 items-center'>
                <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to="/Customer" exact>Home</NavLink>
                <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to='/Customer/view_request'>View Request</NavLink>
                <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to='/Customer/revoke'>Revoke Access</NavLink>
                <NavLink className="no-underline text-gray-800 hover:text-white hover:bg-sky-700 rounded-full px-4 py-2 font-semibold hover:shadow-md" activeClassName="bg-sky-800 text-white" to='/Customer/view_org'>View Organizations</NavLink>
            </div>
        </NavLayout>
    )
}

export default NavBar
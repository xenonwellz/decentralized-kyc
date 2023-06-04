import React from "react";
import "../index.css"
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className="flex h-screen ">
      <div className="flex flex-col w-2/3 p-5">
        <div className="flex items-center w-full mb-2 shrink-0">
          <h2 className="relative py-1 pl-4 text-3xl font-bold leading-none">
            {/* <div className="absolute top-0 left-0 w-2 h-full bg-black rounded-lg"></div> */}
            <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className="inline-block w-10 h-10">
              <path
                d="M45.67,.27c12.36,0,24.72,.15,37.07-.07,5.43-.09,9.13,1.97,11.85,6.6,5.3,9.02,10.8,17.93,16.22,26.88,4.29,7.08,8.82,7.31,13.24,.43,5.88-9.16,11.65-18.39,17.24-27.73C143.94,1.97,147.36-.09,152.57,0c12.15,.21,24.3-.02,36.44,.1,7.59,.08,9.44,3.4,5.4,9.95-13.51,21.91-27.21,43.71-40.73,65.62-2.61,4.23-6.71,4.88-10.89,4.95-12.14,.22-24.3,.39-36.44,.07-6-.16-9.85,1.73-12.38,7.31-1.8,3.96-4.67,7.43-6.96,11.18-4.54,7.43-2.38,11.58,6.25,11.63,21.57,.12,43.15,.35,64.72,.02,8.24-.13,13.79,2.54,17.85,9.91,5.34,9.7,11.59,18.9,17.35,28.38,3.57,5.88,1.9,9.56-4.86,9.59-25.97,.14-51.94-.02-77.91-.13-4.67-.02-7.68-2.75-9.98-6.59-5.15-8.62-10.44-17.17-15.59-25.79-4.66-7.78-9.8-7.94-14.58-.32-5.22,8.34-10.44,16.67-15.57,25.07-2.29,3.76-5.47,5.48-9.88,5.45-12.57-.09-25.14,.08-37.7-.07-6.94-.08-8.97-3.39-5.37-9.23,13.85-22.45,27.94-44.74,41.94-67.1,2.28-3.65,5.87-4.42,9.81-4.42,12.15,0,24.3-.25,36.44,.09,5.88,.16,10.06-1.28,12.6-6.97,1.52-3.41,3.9-6.43,5.85-9.66,4.14-6.84,2.06-10.71-6.06-10.77-19.27-.14-38.54-.09-57.81-.12-3.77,0-7.54-.02-11.31-.08-5.44-.09-9.45-2.31-12.31-7.21C14.8,30.38,8.24,20.15,2.07,9.7-1.7,3.3,0,.26,7.34,.19c12.78-.14,25.55-.04,38.33-.04v.12Z" />
            </svg>
          </h2>
        </div>
        <div className="w-full h-full rounded-3xl" style={{ backgroundImage: `url(/img/bg.png)`, backgroundSize: 'Cover', backgroundRepeat: 'no-repeat' }}></div>
      </div>
      <div className="flex flex-col justify-center w-1/3 p-4">
        <div className="mb-2">
          <div className="text-3xl text-semibold">
            Welcome to the world of <span className="inline-block text-transparent bg-gradient-to-tr bg-clip-text from-rose-400 to-sky-600">decentralized</span>, secure, and transparent identity management.
          </div>
          <div className="my-4 text-gray-700">
            Select your account type to continue.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Link to="/admin">
            <button className="w-full p-2 text-center text-white bg-yellow-600 border rounded-lg shadow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="inline-block w-8 h-8 my-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg><br />

              Admin
            </button>
          </Link>
          <Link to="/organization">
            <button className="w-full p-2 text-center text-white border rounded-lg shadow bg-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="inline-block w-8 h-8 my-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg><br />

              Organization</button>
          </Link>
          <Link to="/customer">
            <button className="w-full p-2 text-center text-white border rounded-lg shadow bg-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="inline-block w-8 h-8 my-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg><br />
              Customer
            </button>
          </Link>
        </div>
        <div className="mt-4 text-xs font-semibold text-rose-500">Note: Admin account is the account that deployed the smart contract.</div>
      </div>

    </div>
  );
}
export default Index;
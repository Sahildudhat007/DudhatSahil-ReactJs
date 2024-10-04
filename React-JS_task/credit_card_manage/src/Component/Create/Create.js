import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        // id: "",
        CreaditCardName: "",
        CreaditCardNumber: "",
        Limit: "",
        Spend: "",
        LastLimit: "",
        UserRatio: ""
    })

    const onSubmitUser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/card", user)
        navigate("/")
        // .then(() => {
        //     localStorage.setItem('UserId', user.id)
        //     navigate("/")
        // })
    }

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
            <h2 className="text-lg font-semibold mb-3">Add New Creadit Card</h2>
            <form onSubmit={onSubmitUser}>
                <div className="mb-4">
                    <label className="block text-gray-700">Creadit Card Name</label>
                    <input
                        type="text"
                        name="BankName"
                        className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                        onChange={(e) => setUser({ ...user, CreaditCardName: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Creadit Card Number</label>
                    <input
                        type="number"
                        name="BankName"
                        className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                        onChange={(e) => setUser({ ...user, CreaditCardNumber: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Limit</label>
                    <input
                        type="text"
                        name="Number"
                        className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                        onChange={(e) => setUser({ ...user, Limit: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Spend</label>
                    <input
                        type="text"
                        name="Limits"
                        className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                        onChange={(e) => setUser({ ...user, Spend: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Last Limit</label>
                    <input
                        type="text"
                        name="Spend"
                        className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                        onChange={(e) => setUser({ ...user, LastLimit: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">User Ratio</label>
                    <input
                        type="text"
                        name="score"
                        className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                        onChange={(e) => setUser({ ...user, UserRatio: e.target.value })}
                    />
                </div>
                <button
                    type="submit"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Create

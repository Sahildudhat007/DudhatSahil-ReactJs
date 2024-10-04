import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        CreaditCardName: "",
        CreaditCardNumber: "",
        Limit: "",
        Spend: "",
        LastLimit: "",
        UserRatio: ""
    });

    const editData = async (e) => {
        const res = await axios.get(`http://localhost:3000/card/${id}`)
        setUser(res.data)
    };

    const onSubmitUser = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/card/${id}`, user);
        navigate("/");
    };

    useEffect(() => {
        editData();
    }, []);


    return (
        <div>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <h2 className="text-lg font-semibold">Edit Credit Card</h2>
                <form onSubmit={onSubmitUser}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Credit Card Name</label>
                        <input
                            id="CreaditCardName"
                            name="CreaditCardName"
                            type="text"
                            className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                            value={user.CreaditCardName}
                            onChange={(e) => setUser({ ...user, CreaditCardName: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Credit Card Number</label>
                        <input
                            id="CreaditCardNumber"
                            name="CreaditCardNumber"
                            type="text"
                            className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                            value={user.CreaditCardNumber}
                            onChange={(e) => setUser({ ...user, CreaditCardNumber: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Limit</label>
                        <input
                            id="Limit"
                            name="Limit"
                            type="text"
                            className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                            value={user.Limit}
                            onChange={(e) => setUser({ ...user, Limit: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Spend</label>
                        <input
                            id="Spend"
                            name="Spend"
                            type="text"
                            className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                            value={user.Spend}
                            onChange={(e) => setUser({ ...user, Spend: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Last Limit</label>
                        <input
                            id="LastLimit"
                            name="LastLimit"
                            type="text"
                            className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                            value={user.LastLimit}
                            onChange={(e) => setUser({ ...user, LastLimit: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">User Ratio</label>
                        <input
                            id="UserRatio"
                            name="UserRatio"
                            type="text"
                            className="w-full mt-2 px-3 py-2 border rounded-md outline-0"
                            value={user.UserRatio}
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
        </div>
    )
}

export default Edit

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CreditCard } from 'lucide-react';

const Product = () => {

    const [card, setCard] = useState([]);

    const cardList = () => {
        axios.get('http://localhost:3000/card')
            .then((response) => {
                setCard(response.data, 'Rsponse');
            })
            .catch((err) => {
                console.log(err, 'eeee');
            });
    };

    useEffect(() => {
        cardList();
    }, []);

    const onDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this card?")) {
            axios.delete(`http://localhost:3000/card/${id}`)
                .then((response) => {
                    cardList();
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error, 'error');
                });
        }
    };

    return (
        <>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Credit Card List</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all Credit Card. You can add new Credit Card, edit or delete existing
                            ones.
                        </p>
                    </div>
                    <div>
                        <Link to="/create">
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add new Credit Card
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                                            >
                                                <span>Credit Card List</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                                            >
                                                Card Amount
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                                            >
                                                Spand
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                                            >
                                                Last Limit
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                                            >
                                                User Ratio
                                            </th>
                                            <th scope="col" className="relative px-4 py-3.5">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {card.map((carditem) => (
                                            <tr key={carditem.id}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="">
                                                            <div className="font-medium">{carditem.CreaditCardName}</div>
                                                            <div className="text-xs font-medium">
                                                                {
                                                                    carditem.CreaditCardNumber.toString().split('').fill('*', 0, 12).join('')
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="text-gray-900 ">{carditem.Limit}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    {/* <div className="text-gray-900 ">{carditem.Spend}</div> */}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">{carditem.LastLimit}</td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    {carditem.UserRatio}

                                                </td>
                                                <td className="whitespace-nowrap flex items-center pl-1 py-6 text-right font-medium">
                                                    <Link to={`/edit/${carditem.id}`} className="mr-3 text-xl">
                                                        <FaUserEdit />
                                                    </Link>
                                                    <Link onClick={() => onDelete(carditem.id)} to="" className="text-xl">
                                                        <MdDelete />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product
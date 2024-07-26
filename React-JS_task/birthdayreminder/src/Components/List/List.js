import React from 'react'

const List = ({ id, name, age, img }) => {
    return (
        <div>
            <div className="flex items-center py-3">
                <img src={img} className="img-style-1 w-[60px] h-[60px] rounded-full" />
                <div className="ms-3 mt-1">
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </div>
        </div>
    )
}

export default List
import React from 'react'

const Address = ({user}) => {
    return (
        <div className="listItem">
            <h1>Addresses:</h1>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
        </div>
    )
}

export default Address

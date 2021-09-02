import React from 'react'
import UserItem from './UserItem'

class Users extends React.Component {

    render() {
        const {users, changeShowAddressState, showAddress} = this.props

        const handleClick = () => {
            changeShowAddressState()
        } 

    return (
        <div>
           <button onClick={handleClick} className="btn">Show Addresses</button> 
           {users.map(user => (
               <UserItem user={user}
               key={user.id}
               changeShowAddressState={changeShowAddressState}
               showAddress={showAddress}/>
           ))}
        </div>
    )
    }
}
export default Users

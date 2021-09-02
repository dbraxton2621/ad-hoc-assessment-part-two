import React from 'react'
import Address from './Address'

class UserItem extends React.Component {
    render() {
    const {user, showAddress} = this.props

        return (
            <div className= "listItem">
                <h1>{user.name}</h1>
                <p>{user.username}</p>
                <p>{user.email}</p>
                {showAddress && <Address user={user}/>}
            
            </div>
        )
    
    }
            
}

export default UserItem

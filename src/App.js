import React from 'react'
import Users from './Components.js/Users.js'
import axios from 'axios'
import Loading from './Components.js/Loading.js'
import './App.css';

class App extends React.Component {

  state = {
    loading: false,
    users: [],
    showAddress: false,
  }

  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios('https://jsonplaceholder.typicode.com/users')
    this.setState({loading: false, users: res.data})
  }

  render() {

    const {users, loading, showAddress} = this.state

    const changeShowAddressState = () => {
      if(showAddress) {
        this.setState({showAddress: false})
      } else {
        this.setState({showAddress: true})
      }
    }

    if(loading) {
      return (
        <div className="container">
          <Loading />
        </div>
      )
    }
  return (
    <div className="App">
      <Users users={users}
      changeShowAddressState={changeShowAddressState}
      showAddress={showAddress}/>
    </div>
  );
}
}

export default App
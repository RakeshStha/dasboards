import React, {useEffect, useState, useCallback} from 'react'
import '../Navbar/navbar.css'
import '../Dashboard/dashboard.css'


const Dashboard = () => {
    const [users,setUsers] = useState([{}])
    const [subscribe, setSubscribe] = useState([{}])

    //For user data fetch

    const fetchUserAPI = useCallback(async () => {
        let response = await fetch('data/users.json')
        response = await response.json()
        setUsers(response)
      }, [])

      useEffect(() => {
        fetchUserAPI()
      }, [fetchUserAPI])

      //For Subscribed user

      const fetchSubscribeAPI = useCallback(async () => {
        let response = await fetch('data/subscriptions.json')
        response = await response.json()
        setSubscribe(response)
      }, [])

      useEffect(() => {
        fetchSubscribeAPI()
      }, [fetchSubscribeAPI])
    
    return (
        <div>
            <main>
                <h1 className= "heading">Welcome to Dashboard</h1>
                <div className="users_view">
                    <div className="flexs">
                        <a href="/userlist">
                            <div className="total_users table_1">
                                <h1>Total Users:  {users.length}</h1>
                            </div>
                        </a>
                    </div>
                    <div className="flexs">
                        <a href="/suscriber">
                            <div className="total_users table_2">
                                <h1>Subscribed user: {subscribe.length}</h1>
                            </div>
                        </a>
                    </div>
                </div>  
            </main>    
        </div>
    )
}

export default Dashboard

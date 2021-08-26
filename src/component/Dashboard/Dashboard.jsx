import React, {useEffect, useState} from 'react'
import '../Navbar/navbar.css'
import '../Dashboard/dashboard.css'

const Dashboard = () => {
    const [users,setUsers] = useState([{}])
    const [subscribe, setSubscribe] = useState([{}])

  useEffect(()=>{
    fetch('data/users.json').then((res)=>res.json()).then((data)=>{
      setUsers(data)
     })
     
  },[])

  useEffect(()=>{
    fetch('data/subscriptions.json').then((res)=>res.json()).then((data)=>{
      setSubscribe(data)
     })
     
  },[])
    
    return (
        <div>
            <main>
                <h1 className= "heading">Welcome to Dashboard</h1>
                    {/* <p> User data list : {Object.keys(UserData).length}</p>
                    <p>Suscriber list: {Object.keys(Suscriber).length}</p> */}

                <div className="users_view">
                    <div className="flexs">
                        <div className="total_users table_1">
                            <h1>Total Users:  {users.length}</h1>
                        </div>
                    </div>
                    <div className="flexs">
                        <div className="total_users table_2">
                            <h1>Subscribed user: {subscribe.length}</h1>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    )
}

export default Dashboard

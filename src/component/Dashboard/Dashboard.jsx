import React, {useEffect, useState, useCallback} from 'react'
import '../Navbar/navbar.css'
import '../Dashboard/dashboard.css'

// import { PieChart, Pie,  Tooltip } from 'recharts';

// import Tests from './Test'


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

      const usr = users.map((item)=> item)
    //   console.log(usr?.id || '-')
    console.log(usr.id)

  
    
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
                            {/* <p>{console.log(usr.username)}</p> */}
                        </div>
                    </div>
                    <div className="flexs">
                        <div className="total_users table_2">
                            <h1>Subscribed user: {subscribe.length}</h1>
                        </div>
                    </div>
                </div>
                {/* <PieChart width={800} height={800}>
                        
                    <Pie
                        dataKey= {users.map((item)=> <p>{item.username}</p>)}
                        isAnimationActive={false}
                        data={users}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                    </PieChart> */}

{/* 
                <Tests/> */}
            </main>
            
        </div>
    )
}

export default Dashboard

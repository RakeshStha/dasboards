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
                <p className="description-text">
                Genius Systems Pvt. Ltd. (Genius Systems) is a leading software development 
                company based in Nepal. Specialing in innovating digital products for enterprises,
                 developing community solutions and delivering corporate services over different platforms,
                  it has already established itself by providing the digital solutions to scale. 
                  The company continues to explore emerging opportunities for developing technologies
                   for rendering entertainment, news, educational, cultural and productivity contents 
                   over different digital platforms including mobile (both android and iOS), TVs,
                    web and end-user applications.
                </p>

                <div className="users_view">
                    <div className="flexs">
                        <div className="total_users">
                            <h1>Total Users:  {users.length}</h1>
                        </div>
                    </div>
                    <div className="flexs">
                        <div className="total_users">
                            <h1>Subscribed user: {subscribe.length}</h1>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard

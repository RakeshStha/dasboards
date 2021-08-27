import React, {useEffect, useState, useCallback} from 'react'
import '../UserList/userlist.css'


const Suscriber = () => {

    const [search, setSearch] = useState([]);

    const [data,setData]=useState([]);

    const [order, setorder] = useState("ASC"); 

    const [users,setUsers] = useState([{}])

//for user fetch data
    const fetchUserAPI = useCallback(async () => {
        let response = await fetch('data/users.json')
        response = await response.json()
        setUsers(response)
      }, [])

      useEffect(() => {
        fetchUserAPI()
      }, [fetchUserAPI])

//for subscribe user fetch data

      const fetchSubscribeAPI = useCallback(async () => {
        let response = await fetch('data/subscriptions.json')
        response = await response.json()
        setData(response)
      }, [])

      useEffect(() => {
        fetchSubscribeAPI()
      }, [fetchSubscribeAPI])


      const sorting = (col) => {
        if (order === "ASC") {
          const sorted = [...data].sort((a,b)=>
            a[col].toString().toLocaleLowerCase() > b[col].toString().toLocaleLowerCase() ? 1 : -1
          //   ||
          // a[col].Number.toLocaleLowerCase() < b[col].Number.toLocaleLowerCase() ? 1 : -1
            );
            setData(sorted);
            setorder("DSC");
        }
        if (order === "DSC") {
          const sorted = [...data].sort((a,b)=>
          a[col].toString().toLocaleLowerCase() < b[col].toString().toLocaleLowerCase() ? 1 : -1
          
            );
            setData(sorted);
            setorder("ASC");
        }
        }
     

    return (
        <div className="main">
            <div className="search_option">
                <h1 className="table-head"> 
                    <a href="/graph">
                      <i class="fa fa-chevron-circle-left back_icon" aria-hidden="true"></i>
                    </a>
                    Subscribed User Data List
                </h1>
                <div className="input-icons">
                    <i class="fa fa-search icon" aria-hidden="true"></i>
                    <input type="search" 
                    className="input-field"
                    placeholder="Search......."
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                    />
                </div>  
            </div>
            <table> 
                <thead>
                  <tr>
                    <th scope="col" onClick={()=>sorting("id")}>ID <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("user_id")}>User ID <i class="fas fa-sort sortings"></i></th>
                    <th scope="col">Username <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("package")}>Package <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("expires_on")}>Expire on <i class="fas fa-sort sortings"></i></th>
                  </tr>
                </thead>
                <tbody>
                      {
                        data.filter((val) => {
                          if (search === ""){
                              return val
                          }
                          else if (
                          val.id.toString().toLocaleLowerCase().includes(search.toString().toLocaleLowerCase()) 
                          // || val.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                          || val.user_id.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase())
                          || val.package.toLocaleLowerCase().includes(search.toString().toLocaleLowerCase())
                          // || val.expires_on.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase())       
                          ){
                              return val
                          }
                          return false;
                      }).map((val, key) => {
                        
                        // Finding the same user id linked beterrn user,json and subscription,json

                        const user  = users.find((uid) => uid.id === Number(val.user_id)); 
                          
                          return  <tr key={key}>
                              <td data-label="ID">{val.id}</td>
                              <td data-label="User ID">{val.user_id}</td>
                              <td data-label="Username"> {user?.username || '-'}</td>
                              <td data-label="Package">{val.package}</td>
                              <td data-label="Expire on">{val.expires_on}</td>
                            </tr>  
                      })}
            </tbody>  
            </table>
        </div>       
    )
}


export default Suscriber

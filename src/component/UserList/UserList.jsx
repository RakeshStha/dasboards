import React, {useEffect, useState, useCallback} from 'react'
import '../UserList/userlist.css'

const UserList = () => {

    const [search, setSearch] = useState([]);

    const [data,setData]=useState([]);

    const [order, setorder] = useState("ASC");


    //for user fetch data

    const fetchUsersAPI = useCallback(async () => {
      let response = await fetch('data/users.json')
      response = await response.json()
      setData(response)
    }, [])

    useEffect(() => {
      fetchUsersAPI()
    }, [fetchUsersAPI])



    ////////Normal fetch data withput Async method////////////


    // const getData=()=>{
    //     fetch('./data/users.json'
    //     ,{
    //       headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }
    //     }
    //     )
    //       .then(function(response){
    //         console.log(response)
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         console.log(myJson);
    //         setData(myJson)
    //       });
    //   }
    //   useEffect(()=>{
    //     getData()
    //   },[])

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
                    <a href="/">
                      <i class="fa fa-chevron-circle-left back_icon" aria-hidden="true"></i>
                    </a>
                    User Data List
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
                    <th scope="col" onClick={()=>sorting("first_name")}>First Name <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("middle_name")}>Middle Name <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("last_name")}>Last Name <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("username")}>Username <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("email")}>Email <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("password")}>Password <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("active")}>Active <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("address")}>Address <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("country")}>Country <i class="fas fa-sort sortings"></i></th>
                    <th scope="col" onClick={()=>sorting("join_date")}>Join Date <i class="fas fa-sort sortings"></i></th>
                  </tr>
                </thead>
                <tbody>
                  {
                  data.filter((val) => {
                      if (search === ""){
                          return val
                      }
                      else if (
                      val.first_name.toLocaleLowerCase().includes(search.toString().toLocaleLowerCase()) 
                      || val.email.toLocaleLowerCase().includes(search.toString().toLocaleLowerCase())
                      || val.id.toString().toLocaleLowerCase().includes(search.toString().toLocaleLowerCase())
                      || val.country.toLocaleLowerCase().includes(search.toString().toLocaleLowerCase())
                      || val.username.toLocaleLowerCase().includes(search.toString().toLocaleLowerCase())       
                      ){
                          return val
                      }
                      return false;
                  }).map((val, key) => {
                      return  <tr key={key}>
                          <td data-label="ID">{val.id}</td>
                          <td data-label="First Name">{val.first_name}</td>
                          <td data-label="Middle Name">{val.middle_name}</td>
                          <td data-label="Last Name">{val.last_name}</td>
                          <td data-label="Username">{val.username}</td>
                          <td data-label="Email">{val.email}</td>
                          <td data-label="Password">{val.password}</td>
                          <td data-label="Active">{val.active}</td>
                          <td data-label="Address">{val.address}</td>
                          <td data-label="Country">{val.country}</td>
                          <td data-label="Join Date">{val.join_date}</td>
                        </tr>  
                  })}
            </tbody>  
            </table>
        </div>       
    )
}

export default UserList

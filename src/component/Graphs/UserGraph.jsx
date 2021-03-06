import React from 'react';
import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import './graph.css'
 
function UserGraph()
{
  const[graph,setGraph]=useState([]);
   
  const[getdata,setGetData]=useState([]);
 
  const fetchUserDetail = useCallback(async () => {
    let response = await fetch('data/users.json')
    response = await response.json()
    setGetData(response)
  }, [])

  useEffect(() => {
    fetchUserDetail()
  }, [fetchUserDetail])


// var randomColor = require('randomcolor');
//   var color = randomColor(); 
  
  const selectChart = (e) =>
  {   
    axios.get(`data/users.json`)
     .then(res => {
      const ChartData = res.data;
      let countryName = [];
      let activeStatus = [];
      let firstName = [];
      ChartData.forEach(element => {
        countryName.push(element.country);
        activeStatus.push(element.active);
        firstName.push(element.first_name);
       });
        setGraph({
            labels: countryName,
            datasets: [
              {
                label: 'Active',
                backgroundColor:[
                    '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),
                 ],
                borderWidth:0,
                data: activeStatus
              }
             ]
        });
      });
      
  }
  useEffect(() => {
    selectChart();
  }, []);
   
  return(
     <>
        <div class="view">
           <div className="col">
            <h1 style={{textAlign:"center"}}> 
                <a href="/graph">
                  <i class="fa fa-chevron-circle-left back_icon" aria-hidden="true"></i>
                </a> 
                Bar graph of active user vs country
            </h1>
                <Bar
                    data={graph}
                        options={{
                            title:{
                            display:true,
                            text:'Active User',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            },
                        }    
                    }
                />
            </div>

            <h3 style={{textAlign:"center", padding:"10px"}}>Details Descriptions</h3>

            <div className="col">
               <table>
                 <thead>
                  <tr>
                      <th scope="col">Country</th>
                      <th scope="col">Active (0,1)</th>
                  </tr> 
                </thead>
                <tbody>
                  { getdata.map((name)=>
                    <tr>
                      <td data-label="country">{name.country}</td>
                      <td data-label="active">{name.active}</td>
                    </tr>                  
                    )} 
                </tbody>  
               </table>     
           </div>
        </div>   

     </>
    )
}
export default UserGraph;
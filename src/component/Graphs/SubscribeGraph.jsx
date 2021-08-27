import React from 'react';
import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import './graph.css'
 
function SubscribeGraph()
{
  const[graph,setGraph]=useState([]);
   
  const[getdata,setGetData]=useState([]);
 
  const fetchSubscribeDetail = useCallback(async () => {
    let response = await fetch('data/subscriptions.json')
    response = await response.json()
    setGetData(response)
  }, [])

  useEffect(() => {
    fetchSubscribeDetail()
  }, [fetchSubscribeDetail])


// var randomColor = require('randomcolor');
//   var color = randomColor(); 
  
  const selectChart = (e) =>
  {   
    axios.get(`data/subscriptions.json`)
     .then(res => {
      const ChartData = res.data;
      let packageName = [];
      let userId = [];
      ChartData.forEach(element => {
        packageName.push(element.package);
        userId.push(element.user_id);
       });
        setGraph({
            labels: packageName,
            datasets: [
              {
                label: 'Id range',
                backgroundColor:[
                    '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),
                 ],
                borderWidth:0,
                data: userId
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
        <div className="view">
           <div className="col">
               <h1 style={{textAlign:"center"}}> 
                  <a href="/graph">
                    <i class="fa fa-chevron-circle-left back_icon" aria-hidden="true"></i>
                  </a> 
                  Bar graph of subscribed user vs package
               </h1>
                <Bar
                    data={graph}
                        options={{
                            title:{
                            display:true,
                            text:'Id range',
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
                      <th scope="col">Package</th>
                      <th scope="col">User Id</th>
                  </tr> 
                </thead>
                <tbody>
                  { getdata.map((name)=>
                    <tr>
                      <td data-label="package">{name.package}</td>
                      <td data-label="userid">{name.user_id}</td>
                    </tr>                  
                    )} 
                </tbody>  
               </table>     
           </div>     
        </div>
     </>

    )
}
export default SubscribeGraph;
import React from 'react'

const Graph = () => {
    return (
        <>
            <main>      
                <h1 className= "heading">View graph Summary Details</h1>
                <div className="users_view">
                    <div className="flexs">
                        <a href="/usergraph">
                            <div className="total_users table_1">
                                <h1>User Graph</h1>
                            </div>
                        </a>
                    </div>
                    <div className="flexs">
                        <a href="/subscriptiongraph">
                            <div className="total_users table_2">
                                <h1>Subscription Graph</h1>
                            </div>
                        </a>
                    </div>
                </div>  
            </main>    
        </>
    )
}

export default Graph

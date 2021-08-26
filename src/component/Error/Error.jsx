import React from 'react'
import '../Error/error.css'

const Error = () => {
    return (
        <>
        <main>
            <div className="error-head">
                <h1>OOPs! 404 Error</h1>  
            </div>
            <div class="contant_box_404">
                <h2>Look like you're lost</h2>
                <p>the page you are looking for not avaible!</p>
                <a href="/" class="link_404">Go to Home</a>
            </div>
        </main>
        </>
    )
}

export default Error

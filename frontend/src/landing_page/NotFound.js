import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return (  
        <div className="row text-center">
            <h1 className='mt-5'>404 Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/"><button className="p-3 btn btn-primary fs-5 mb-5" style={{width: "20%", margin: "0 auto"}}>Go Home</button></Link>
        </div>
    );
}

export default NotFound;
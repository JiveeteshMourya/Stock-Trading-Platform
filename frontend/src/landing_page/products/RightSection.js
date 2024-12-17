import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container'>
            <div className='row mt-2 mb-2'>
                <div className='col-6 p-5 d-flex flex-column justify-content-center'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration: "none"}}>Learn More <i class="fa-solid fa-arrow-right fs-6"></i></a>
                    </div>
                </div>
                <div className='col-6 p-1'>
                    <img src={imageURL} style={{width: "100%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;
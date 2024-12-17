import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row mb-2 mt-2'>
                <div className='col-6 p-5'>
                    <img src={imageURL} style={{width: "100%"}}/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i class="fa-solid fa-arrow-right fs-6"></i></a>
                        <a href={learnMore} style={{textDecoration: "none", marginLeft: "50px"}}>Learn More <i class="fa-solid fa-arrow-right fs-6"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                        <a href={appStore} style={{marginLeft: "50px"}}><img src="media/images/appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
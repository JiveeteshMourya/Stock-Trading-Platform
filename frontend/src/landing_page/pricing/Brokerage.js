import React from 'react';

function Brokerage() {
    return ( 
        <div className='container border-top pt-5'>
            <div className='row'>
                <div className='col-8' >
                    <h2 className='text-center mb-4'><a href="" style={{textDecoration: "none"}}>Brokerage Calculator</a></h2>
                    <ul style={{lineHeight: "2"}} className='text-muted fs-6'>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of &#x20B9;50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes. if required, shall be charged &#x20B9;20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or &#x20B9;100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or &#x20B9;200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charges &#x20B9;40 per executed order instead of &#x20B9;20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 text-center'>
                    <h2><a href="" style={{textDecoration: "none"}}>List of charges</a></h2>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
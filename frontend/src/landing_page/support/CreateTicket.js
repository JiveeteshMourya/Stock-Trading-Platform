import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-3 mt-5'>
                <h1 className='fs-2 text-muted'>To create a ticket, select a relevant topic</h1>
            </div>
            <div className='row'>
                <div className='col-4 p-5 mb-2 mt-2'>
                    <h4 className='mb-4'><i class="fa-solid fa-circle-plus"></i> Account Opening</h4>
                    <ul style={{listStyle: "none"}}>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Online Account Opening</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Offline Account Opening</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Company, Partnership and HUF Account Opening</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>NRI Account Opening</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Charges at Zerodha</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Zerodha IDFC First Bank 3-in-1 Account</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Getting Started</a></li>
                    </ul>
                </div>
                <div className='col-4 p-5 mb-2 mt-2'>
                    <h4 className='mb-4'><i class="fa-regular fa-user"></i> Your Zerodha Account</h4>
                    <ul style={{listStyle: "none"}}>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Login Credentials</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Your Profile</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Account modification and segment addition</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>CMR & DP ID</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Nomination</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Transfer and conversion shares</a></li>
                    </ul>
                </div>
                <div className='col-4 p-5 mb-2 mt-2'>
                    <h4 className='mb-4'><i class="fa-solid fa-chart-simple"></i> Trading and Markets</h4>
                    <ul style={{listStyle: "none"}}>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Trading FAQs</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Kite</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Margins</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Product and order types</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Corporate actions</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Kite features</a></li>
                    </ul>
                </div>
                <div className='col-4 p-5 mb-2 mt-2'>
                    <h4 className='mb-4'><i class="fa-regular fa-hard-drive"></i> Funds</h4>
                    <ul style={{listStyle: "none"}}>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Fund withdrawal</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Adding funds</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Adding bank accounts</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>eMandates</a></li>
                    </ul>
                </div>
                <div className='col-4 p-5 mb-2 mt-2'>
                    <h4 className='mb-4'><i class="fa-solid fa-circle-notch"></i> Console</h4>
                    <ul style={{listStyle: "none"}}>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>IPO</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Portfolio</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Funds statement</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Profile</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Reports</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Referral program</a></li>
                    </ul>
                </div>
                <div className='col-4 p-5 mb-2 mt-2'>
                    <h4 className='mb-4'><i class="fa-solid fa-coins"></i> Coin</h4>
                    <ul style={{listStyle: "none"}}>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Understanding mutual funds and Coin</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Coin app</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Coin web</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>Transaction and reports</a></li>
                        <li><a href="" style={{textDecoration: "none" , lineHeight: "2.5"}}>National Pension Scheme (NPS)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;

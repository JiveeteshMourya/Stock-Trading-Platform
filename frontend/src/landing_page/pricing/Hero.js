import React from 'react';

function Hero() {
    return ( 
        
        <div className='container'>
            <div className='row p-5 mt-3 border-bottom text-center'>
                <h1>Pricing</h1>
                <h4 className='text-muted mt-3'>Free equity investments and flat &#x20B9;20 Intraday and F&O trades</h4>
            </div>
            <div className='row text-center mt-5'>
                <div className='col p-4'>
                    <img src="media/images/pricingEquity.svg"/>
                    <h2 className='fs-3'>Free equity delivery</h2>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE),<br/>are absolutely free - &#x20B9;0 brokerage</p>
                </div>
                <div className='col p-4'>
                    <img src="media/images/intradayTrades.svg"/>
                    <h2 className='fs-3'>Intraday and F&O trades</h2>
                    <p className='text-muted'>Flat &#x20B9;20 or 0.03% (whichever is lower) per exevulted order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className='col p-4'>
                    <img src="media/images/pricingEquity.svg"/>
                    <h2 className='fs-3'>Free direct MF</h2>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free - &#x20B9;0 commisions & DP charges.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Hero;
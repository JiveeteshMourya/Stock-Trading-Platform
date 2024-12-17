import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='container p-5' id="supportWrapper">
                <h3>Support Portal</h3>
                <a href="">Track Tickets</a>
            </div>
            <div className='container mt' style={{display: "flex", justifyContent: "space-between"}}>
                <div className='row mb-5'>
                    <div className='col-6 p-5'>
                        <h2 className='fs-3'>Search for an answer or browse help topics to create a ticket</h2>
                        <input type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected.'/>
                        <br/>
                        <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;
                        <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;
                        <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;
                        <a href="">Kite user manual</a>&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className='col-6 p-5'>
                        <h2 className='fs-3'>Featured</h2>
                        <ol>
                            <li><a href="">Current Takeouts and Delisting - January 2025</a></li>
                            <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
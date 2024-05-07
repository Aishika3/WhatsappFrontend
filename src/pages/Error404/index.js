import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const SignUpReq = () => {

	return (
        <div class='w-[50%] m-auto'>
            <div class='m-auto'>
                <img class="m-auto" src="/assets/images/WhatsappAutomator-7fceac20.svg" width="300"/>
            </div>
            <div className='flex flex-col m-auto'>
                <p className='text-lg'>Woah, looks like you are on the wrong path! Get back on the right path in just <span class='text-PrimaryCyan'>10 seconds</span>!!</p>
                <br/>
                <Link to="/">
                    <button class="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border-2 border-PrimaryCyan hover:border-transparent rounded">Take Me Back Home</button>
                </Link>
            </div>
            <div className='privacy'>

            </div>
        </div>
	);
}

export default SignUpReq;

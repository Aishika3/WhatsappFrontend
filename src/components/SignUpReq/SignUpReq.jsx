import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export const SignUpReq = () => {

	return (
        <div class='w-[50%] m-auto'>
            <div class='m-auto'>
                <img class="m-auto" src="/assets/images/WhatsappAutomator-7fceac20.svg" width="200"/>
            </div>
            <div className='flex flex-col m-auto'>
                <p className='text-lg'>Well, you are just <span class='text-PrimaryCyan'>10 seconds</span> away from using our product!!</p>
                <br/>
                <Link to="/signin">
                    <button class="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border-2 border-PrimaryCyan hover:border-transparent rounded">Sign In</button>
                </Link>
            </div>
            <div className='privacy'>

            </div>
        </div>
	);
}

export default SignUpReq;

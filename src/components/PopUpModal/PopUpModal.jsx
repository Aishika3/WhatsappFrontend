import React, { useState } from 'react';
import './styles.css';
import Cancel from "@iconscout/react-unicons/icons/uil-cancel";

export const PopUpModal = (props) => {
	

	return (
        <>
            <div class='backdrop overflow-y-auto'>
                <div className='popup'>
                   {props.message}
                   <Cancel color="#01CEA5" size={"2rem"} onClick={props.handlePopup} className="cancel"/>
                </div>
                
            </div>
        </>
	);
}

export default PopUpModal;

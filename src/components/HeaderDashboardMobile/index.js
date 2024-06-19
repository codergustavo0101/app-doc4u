import React from "react";

import companyIcon from "./svg/companyIcon.svg"
import { BigHead } from '@bigheads/core'
import style from './styles/style.css'

const HeaderDashboardMobile = ({onClick}) => {
    

    return (

        <div className="header_dashboard_mobile">

            <svg onClick={onClick} width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.6875 3.87874H25.3125C26.2445 3.87874 27 3.01045 27 1.93937C27 0.868293 26.2445 0 25.3125 0H1.6875C0.755525 0 0 0.868293 0 1.93937C0 3.01045 0.755525 3.87874 1.6875 3.87874Z" fill="#476EE6" />
                <path d="M25.3125 8.87866H1.6875C0.755525 8.87866 0 9.74696 0 10.818C0 11.8891 0.755525 12.7574 1.6875 12.7574H25.3125C26.2445 12.7574 27 11.8891 27 10.818C27 9.74696 26.2445 8.87866 25.3125 8.87866Z" fill="#476EE6" />
                <line x1="1.93585" y1="20.31" x2="13.0642" y2="20.31" stroke="#476EE6" stroke-width="3.88" stroke-linecap="round" />
            </svg>


            <img src={companyIcon} style={{width:"180px",height:"140px"}} />

            {localStorage.getItem("@USER_PICTURE") 
            
            ?
        
            <img className="user_image_header_mobile" src={localStorage.getItem("@USER_PICTURE")}/>
            :
            
            <div className="big_head_mobile">
                
            <BigHead
                accessory="shades"
                body="chest"
                circleColor="blue"
                clothing="tankTop"
                clothingColor="black"
                eyebrows="angry"
                eyes="wink"
                facialHair="mediumBeard"
                graphic="vue"
                hair="short"

                hairColor="black"
                hat="none"
                hatColor="green"
                lashes="false"
                lipColor="purple"
                mask="true"
                faceMask="true"
                mouth="open"
                skinTone="brown"
            />
            </div>
            }

        </div>

    )
}

export default HeaderDashboardMobile
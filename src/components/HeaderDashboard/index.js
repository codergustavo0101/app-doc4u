import React from 'react'
import backIcon from './images/svg/backIcon.svg'
import { BigHead } from '@bigheads/core'
const HeaderDashboard = ({ name, page, arrow }) => {

    const headerStyle = {

        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        zIndex: "1",
        background: "#F9F9F9"
    }
    const userInfo = {

        display: "flex",
        alignItems: "center",
        paddingLeft: "1.1rem",
        justifyContent: "space-between",
        paddingRight: "1.1rem",
        width: "234px",
        background: "white",
        height: "45px",
        border: "1.9px solid #d7d7d7",
        borderRadius: "60px"

    }
    const exit = async () => {

        localStorage.removeItem("@MAIL")
        window.location.href = "/"

    }

    return (

        <div style={headerStyle}>

            {arrow == true

                ?

                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={backIcon} style={{ position: "relative", top: "-8px", right: "27px", cursor: "pointer" }} onClick={() => window.location.href = `${page}`} />
                    <p className="textPrimaryHeaderDashboard">{name}</p>


                </div>
                :
                <p className="textPrimaryHeaderDashboard">{name}</p>

            }


            <div class="dropdown">
                <button style={userInfo} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div style={{ position: "relative", top: "-2px", right: "13px" }}>

                        {localStorage.getItem("@USER_PICTURE") != "false" && localStorage.getItem("@USER_PICTURE") != null

                            ?
                            <img src={localStorage.getItem("@USER_PICTURE")} style={{ borderRadius: "100%", width: "35px", height: "35px", marginTop: "0.2rem", objectFit: "cover" }} />

                            :
                            <div style={{ width: "44px", height: "44px", marginTop: "-0.2rem" }}>
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
                                    hair="short" asd
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
                    <p className="textClientInfoHeader">{localStorage.getItem("@USER_NAME")}</p>

                    <svg width="8" height="8" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.182668 1.78582C0.0688405 1.57763 0.0688405 1.32582 0.182668 1.11763C0.446809 0.634515 1.14065 0.634515 1.40479 1.11763L2.41937 2.97328C3.12207 4.25852 4.96793 4.25852 5.67064 2.97327L6.68521 1.11763C6.94935 0.634515 7.64319 0.634515 7.90733 1.11763C8.02116 1.32582 8.02116 1.57763 7.90733 1.78582L6.67725 4.03563C5.53942 6.11672 2.55058 6.11672 1.41275 4.03563L0.182668 1.78582Z" fill="black" />
                    </svg>


                </button>

            </div>



        </div>


    )

}

export default HeaderDashboard
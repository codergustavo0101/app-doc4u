import React, { useState } from 'react'
import HeaderDashboardMobile from '../../components/HeaderDashboardMobile'
import SidebarMobile from '../../components/SidebarMobile'
import TableListMobileCategorys from '../../components/TableListMobileCategorys'
const Schedules = () => {
    const [openSidebar, setOpenSidebar] = useState(false)

    return (

        <section className='dashboard'>

            <div className='container_mobile'>

                {openSidebar == true

                    ?
                    <div className='sidebar_open_background' onClick={() => setOpenSidebar(!openSidebar)}>
                    </div>
                    :
                    <></>

                }
                <HeaderDashboardMobile onClick={() => setOpenSidebar(true)} />
                <SidebarMobile state={openSidebar} />

                <div className='header_container_mobile'>
                <button className='btn_consult_mobile_schedule'>Criar Agendamento +</button>
                </div>

                <div style={{ width: "100%", background: "white", paddingLeft: "1.46rem", overflowY: "hidden" }}>
                    <div style={{ width: "90vw", overflowX: "scroll", overflowY: "hidden", position: "fixed" }}>
                        
                        <div style={{ minWidth: "1150px", paddingLeft: "0rem", display: "flex", overflowY: "hidden" }}>
                            <TableListMobileCategorys type={"category"}  />
                        </div>
                    </div>

                </div>


            </div>

        </section>

    )
}

export default Schedules
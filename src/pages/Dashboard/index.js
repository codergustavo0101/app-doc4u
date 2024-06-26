import React, { useState } from 'react'
import HeaderDashboardMobile from '../../components/HeaderDashboardMobile'
import HeaderDashboard from '../../components/HeaderDashboard'
import SidebarMobile from '../../components/SidebarMobile'
import TableListSchedules from '../../components/TableListSchedules'
import TableListMobileCategorys from '../../components/TableListMobileCategorys'
const Dashboard = () => {
    const [openSidebar, setOpenSidebar] = useState(false)

    return (

        <section className='dashboard'>

            {/* <div className='container_data'>
                <div >
                    <HeaderDashboard name={"Agendamentos"} />
                    <TableListSchedules  />

                </div>
            </div> */}

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
                    {/* <button className='btn_consult_mobile'>Consulta Clínica +</button> */}
                </div>

                <div style={{ width: "100%", background: "white", paddingLeft: "1.46rem", overflowY: "hidden" }}>
                    <div style={{ width: "90vw", overflowX: "scroll", overflowY: "hidden", position: "fixed" }}>

                        <div style={{ minWidth: "1150px", paddingLeft: "0rem", display: "flex", overflowY: "hidden" }}>
                            <TableListMobileCategorys  type={"category"} />
                        </div>
                    </div>

                </div>


            </div>

        </section>

    )
}

export default Dashboard
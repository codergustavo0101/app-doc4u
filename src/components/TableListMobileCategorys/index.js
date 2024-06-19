import React, { useState, useEffect, useContext } from 'react'
import api from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-tooltip/dist/react-tooltip.css";

import InputData from './components/InputData'
import TableListTop from './components/TableListTop';
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { FilterContext } from '../../context/filter';
import InputModal from '../InputModal';
import style from './styles/style.css'


const TableListMobileCategorys = ({ table, type }) => {
    const { t } = useTranslation()
    const { filter, dataUsers } = useContext(FilterContext)



    const navigate = useNavigate()

    /* CLIENT CONTEXT */
    const [data, setData] = useState()

    const [valueArray, setValueArray] = useState()
    const [idEdit, setIdEdit] = useState();
    const [idRemove, setIdRemove] = useState();
    const [categorys, setCategorys] = useState([])
    const [modalState, setModalState] = useState(false)
    const [modalStateDrive,setModalStateDrive] = useState(false)
    const [modalConfirmVisit,setModalConfirmVisit] = useState(false)
    const [confirmExecution,setModalConfirmExecution] = useState(false)

    const [cep,setCep] = useState(false)

    const [nameDrive,setNameDrive] = useState()
    const [linkDrive,setLinkDrive] = useState()
    const [userId,setUserId] = useState()


    const getAll = async () => {
        const response = await api.get(`panel/schedule/get/${localStorage.getItem("@USER_NAME")}`)
        if (response.status == 200) {
            setCategorys(response.data)
        }

    }
    const get = async () => {

        const response = await api.get("client/immobiles/all/info")
        if (response.status == 404) {
            return false
        }

        setData(response.data)
    };
    const remove = async () => {
        const response = await api.delete(`panel/immobiles/delete/${idRemove}`)

        if (response.status == 200) {
            toast.success('Imóvel deletado com sucesso!!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        setTimeout(() => {

            window.location.href = "/dashboard"

        }, [1800])

    }
    const handleAddress = () => {
        window.open("https://maps.google.com?q=" + cep);
    }
    const redirectToEditPage = () => {
        localStorage.setItem("@ID_EDIT", idEdit)
        navigate("/dashboard/edit/stock")
    }

    const handleUpdateCancelSchedule = async () => {
        const response = await api.put("panel/schedule/update/", {
            status: 4,
            id: idEdit
        })

        if (response.status == 200) {
            window.location.href = "/dashboard/schedules"
        }

    }

    
    const handleUpdateSchedule = async () => {

        const response = await api.put("panel/schedule/update/", {
            status: 1,
            id: idEdit

        })

        if (response.status == 200) {
            window.location.href = "/dashboard/schedules"
        }

    }

    const handleUpdateConfirmVisit = async () => {

        const response = await api.put("panel/schedule/update/", {
            status: 2,
            id: idEdit

        })

        if (response.status == 200) {
            window.location.href = "/dashboard/schedules"
        }

    }

    const handleConfirmExecution = async () => {

        const response = await api.put("panel/schedule/update/", {
            status: 3,
            id: idEdit

        })

        if (response.status == 200) {
            window.location.href = "/dashboard/schedules"
        }

    }


    const handleDrive = async () => {
     
        const response = await api.post("panel/drive/storage",{
            name:linkDrive,
            link_drive:nameDrive,
            id_user:userId,
            schedule_id:idEdit
        })

        if(response.status == 200){
            window.location.href="/dashboard/editor"
        }
    }

    useEffect(() => {

        filter(table, "")

    }, [table])

    useEffect(() => {

        getAll()

    }, [])


    return (

        <>
            <div id="test2" style={{ height: `${valueArray < 5 || valueArray == 0 ? "100%" : "100%"}`, overflowX: "hidden", overflowY: "hidden", marginBottom: "100px", marginTop: "2rem", width: "100%" }}>
                <ToastContainer />

                <TableListTop type={type} />

                {categorys

                    ?
                    categorys.map(item => {
                        return (


                            <div onClick={() => { setModalState(item.status == 0 ? true : false);setModalStateDrive(item.status == 3 ? true : false); setModalConfirmVisit(item.status == 1 ? true : false);setModalConfirmExecution(item.status == 2 ? true : false);  setIdRemove(item.id);setUserId(item.user_id); setIdEdit(item.id);setCep(item.cep) }}>
                                <InputData street={`${item.street} `}  number={item.number} status={item.status} category={item.provider_name} mail={item.service_name} time={item.startTime} phone={item.startDate} name={item.user_name} id_prop={item.id_prop} goal={item.goal} code={item.code} location={item.location} type={"category"} description={item.description} bathroom={item.bathroom_num} district="Test" iptu={item.iptu} m2={item.square_meters} price={item.value} onClick={() => { setIdEdit(0) }} id={0} client={0} />
                            </div>

                        )
                    })

                    :

                    categorys.map(item => {
                        return (


                            <div onClick={() => {  setModalState(item.status == 0 ? true : false);setModalStateDrive(item.status == 3 ? true : false); setModalConfirmVisit(item.status == 1 ? true : false);setModalConfirmExecution(item.status == 2 ? true : false);setIdRemove(item.id); setUserId(item.user_id);setIdEdit(item.id);setCep(item.cep)}}>
                                <InputData  street={item.street}  number={item.number} status={item.status} category={item.provider_name} mail={item.service_name} time={item.startTime} phone={item.startDate} name={item.name} id_prop={item.id_prop} goal={item.goal} code={item.code} location={item.location} type={"category"} description={item.description} bathroom={item.bathroom_num} district="Test" iptu={item.iptu} m2={item.square_meters} price={item.value} onClick={() => { setIdEdit(0) }} id={0} client={0} />
                            </div>

                        )
                    })

                }





            </div>


            <Modal
                dialogClassName="modal-filter-table-list-user-edit"
                show={modalState}
                animation={true}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >

                    <div style={{ display: "flex", height: "30px", justifyContent: "space-between", width: "100%" }}>

                        <p className="textPrimaryModalFilterManager" style={{ position: "relative", right: "17px" }}>{t('Ações')}</p>

                        <div onClick={() => setModalState(false)} style={{ cursor: "pointer" }}>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_2887)">
                                    <path d="M7.49864 6.3679L12.5016 1.35941C12.8122 1.04847 12.8122 0.544354 12.5016 0.233445C12.1911 -0.0774893 11.6876 -0.0774893 11.377 0.233445L6.37456 5.24246L1.37211 0.233445C1.06155 -0.0774893 0.55804 -0.0774893 0.247506 0.233445C-0.0630274 0.544378 -0.0630522 1.0485 0.247506 1.35941L5.25048 6.3679L0.247506 11.3764C-0.0630522 11.6874 -0.0630522 12.1915 0.247506 12.5024C0.558065 12.8133 1.06158 12.8133 1.37211 12.5024L6.37456 7.49334L11.377 12.5024C11.6876 12.8133 12.1911 12.8133 12.5016 12.5024C12.8122 12.1915 12.8122 11.6873 12.5016 11.3764L7.49864 6.3679Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_2887">
                                        <rect width="12.72" height="12.7354" fill="white" transform="translate(0.0143433)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>


                </Modal.Header>
                <Modal.Body style={{ padding: "0px" }}>

                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>


                        <div onClick={() => handleAddress()} style={{ height: "55px", width: "100%", borderBottom: "1px solid #D7D7D7", textAlign: "center", paddingTop: "0.9rem", cursor: "pointer" }}>
                            <p className='textModalTableListUserEditSecondary'>{t('Endereço')}</p>
                        </div>

                        <div onClick={() => handleUpdateSchedule()} style={{ height: "55px", width: "100%", borderBottom: "1px solid #D7D7D7", textAlign: "center", paddingTop: "0.9rem", cursor: "pointer" }}>
                            <p className='textModalTableListUserEditSecondary'>{t('Aceitar')}</p>

                        </div>


                        <div onClick={() => handleUpdateCancelSchedule()} style={{ height: "55px", width: "100%", borderBottom: "1px solid #D7D7D7", textAlign: "center", paddingTop: "0.9rem", cursor: "pointer" }}>
                            <p className='textModalTableListUserRemovePrimary'>{t('Cancelar')}</p>
                        </div>

                    </div>

                </Modal.Body>



            </Modal>

            

            <Modal
                dialogClassName="modal-filter-table-list-user-confirm-visit"
                show={modalConfirmVisit}
                animation={true}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >

                    <div style={{ display: "flex", height: "30px", justifyContent: "space-between", width: "100%" }}>

                        <p className="textPrimaryModalFilterManager" style={{ position: "relative", right: "17px" }}>{t('Ações')}</p>

                        <div onClick={() => setModalState(false)} style={{ cursor: "pointer" }}>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_2887)">
                                    <path d="M7.49864 6.3679L12.5016 1.35941C12.8122 1.04847 12.8122 0.544354 12.5016 0.233445C12.1911 -0.0774893 11.6876 -0.0774893 11.377 0.233445L6.37456 5.24246L1.37211 0.233445C1.06155 -0.0774893 0.55804 -0.0774893 0.247506 0.233445C-0.0630274 0.544378 -0.0630522 1.0485 0.247506 1.35941L5.25048 6.3679L0.247506 11.3764C-0.0630522 11.6874 -0.0630522 12.1915 0.247506 12.5024C0.558065 12.8133 1.06158 12.8133 1.37211 12.5024L6.37456 7.49334L11.377 12.5024C11.6876 12.8133 12.1911 12.8133 12.5016 12.5024C12.8122 12.1915 12.8122 11.6873 12.5016 11.3764L7.49864 6.3679Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_2887">
                                        <rect width="12.72" height="12.7354" fill="white" transform="translate(0.0143433)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>


                </Modal.Header>
                <Modal.Body style={{ padding: "0px" }}>

                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

                        <div onClick={() => handleUpdateConfirmVisit()} style={{ height: "55px", width: "100%", borderBottom: "1px solid #D7D7D7", textAlign: "center", paddingTop: "0.9rem", cursor: "pointer" }}>
                            <p className='textModalTableListUserEditSecondary'>{t('Confirmar visita')}</p>
                        </div>


                        <div onClick={() => setModalConfirmVisit(false)} style={{ height: "55px", width: "100%", borderBottom: "1px solid #D7D7D7", textAlign: "center", paddingTop: "0.9rem", cursor: "pointer" }}>
                            <p className='textModalTableListUserRemovePrimary'>{t('Cancelar')}</p>
                        </div>

                    </div>

                </Modal.Body>



            </Modal>

            <Modal
                dialogClassName="modal-filter-table-list-user-confirm-execution"
                show={confirmExecution}
                animation={true}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >

                    <div style={{ display: "flex", height: "30px", justifyContent: "space-between", width: "100%" }}>

                        <p className="textPrimaryModalFilterManager" style={{ position: "relative", right: "17px" }}>{t('Ações')}</p>

                        <div onClick={() =>  setModalConfirmExecution(false)} style={{ cursor: "pointer" }}>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_2887)">
                                    <path d="M7.49864 6.3679L12.5016 1.35941C12.8122 1.04847 12.8122 0.544354 12.5016 0.233445C12.1911 -0.0774893 11.6876 -0.0774893 11.377 0.233445L6.37456 5.24246L1.37211 0.233445C1.06155 -0.0774893 0.55804 -0.0774893 0.247506 0.233445C-0.0630274 0.544378 -0.0630522 1.0485 0.247506 1.35941L5.25048 6.3679L0.247506 11.3764C-0.0630522 11.6874 -0.0630522 12.1915 0.247506 12.5024C0.558065 12.8133 1.06158 12.8133 1.37211 12.5024L6.37456 7.49334L11.377 12.5024C11.6876 12.8133 12.1911 12.8133 12.5016 12.5024C12.8122 12.1915 12.8122 11.6873 12.5016 11.3764L7.49864 6.3679Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_2887">
                                        <rect width="12.72" height="12.7354" fill="white" transform="translate(0.0143433)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>


                </Modal.Header>
                <Modal.Body style={{ padding: "0px" }}>

                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

                        <div onClick={() => handleConfirmExecution()} style={{ height: "55px", width: "100%", borderBottom: "1px solid #D7D7D7", textAlign: "center", paddingTop: "0.9rem", cursor: "pointer" }}>
                            <p className='textModalTableListUserEditSecondary'>{t('Confirmar execução')}</p>
                        </div>


                        <div onClick={() => setModalConfirmExecution(false)} style={{ height: "55px", width: "100%", borderBottom: "1px solid #D7D7D7", textAlign: "center", paddingTop: "0.9rem", cursor: "pointer" }}>
                            <p className='textModalTableListUserRemovePrimary'>{t('Cancelar')}</p>
                        </div>

                    </div>

                </Modal.Body>



            </Modal>

            
            {/* <Modal
                dialogClassName="modal-filter-table-list-user-edit"
                show={modalStateDrive}
                animation={true}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >

                    <div style={{ display: "flex", height: "30px", justifyContent: "space-between", width: "100%" }}>

                        <p className="textPrimaryModalFilterManager" style={{ position: "relative", right: "17px" }}>{t('Ações')}</p>

                        <div onClick={() => setModalState(false)} style={{ cursor: "pointer" }}>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_2887)">
                                    <path d="M7.49864 6.3679L12.5016 1.35941C12.8122 1.04847 12.8122 0.544354 12.5016 0.233445C12.1911 -0.0774893 11.6876 -0.0774893 11.377 0.233445L6.37456 5.24246L1.37211 0.233445C1.06155 -0.0774893 0.55804 -0.0774893 0.247506 0.233445C-0.0630274 0.544378 -0.0630522 1.0485 0.247506 1.35941L5.25048 6.3679L0.247506 11.3764C-0.0630522 11.6874 -0.0630522 12.1915 0.247506 12.5024C0.558065 12.8133 1.06158 12.8133 1.37211 12.5024L6.37456 7.49334L11.377 12.5024C11.6876 12.8133 12.1911 12.8133 12.5016 12.5024C12.8122 12.1915 12.8122 11.6873 12.5016 11.3764L7.49864 6.3679Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_2887">
                                        <rect width="12.72" height="12.7354" fill="white" transform="translate(0.0143433)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>


                </Modal.Header>
                <Modal.Body style={{ padding: "0px" }}>

                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <InputModal name={"Descrição"}/>
                    <InputModal name={"Link Drive"}/>
                    <button className='btn_confirm_schedule_mobile' onClick={() => handleDrive()}>Confirmar</button>

                    </div>

                </Modal.Body>



            </Modal> */}


        </>
    )
}

export default TableListMobileCategorys
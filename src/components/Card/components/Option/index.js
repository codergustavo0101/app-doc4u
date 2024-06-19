import React from 'react'

const Option = ({ name, textPrimary, textSecondary, textBottom }) => {
    return (

        <>

            <div className='row_option'>
                <p>{name}</p>
            </div>

            <div className='info_row_option'>

                <div className='container_option'>
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66172 10.8914L1.12266 6.35229C0.849219 6.07886 0.849219 5.61401 1.12266 5.34058L2.10703 4.3562C2.38047 4.08276 2.81797 4.08276 3.09141 4.3562L6.18125 7.4187L12.7438 0.856201C13.0172 0.582764 13.4547 0.582764 13.7281 0.856201L14.7125 1.84058C14.9859 2.11401 14.9859 2.57886 14.7125 2.85229L6.67344 10.8914C6.4 11.1648 5.93516 11.1648 5.66172 10.8914Z" fill="#0B70E2" />
                    </svg>
                    <p>{textPrimary}</p>

                </div>
                <div className='line_option'></div>

                <div className='container_option'>
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66172 10.8914L1.12266 6.35229C0.849219 6.07886 0.849219 5.61401 1.12266 5.34058L2.10703 4.3562C2.38047 4.08276 2.81797 4.08276 3.09141 4.3562L6.18125 7.4187L12.7438 0.856201C13.0172 0.582764 13.4547 0.582764 13.7281 0.856201L14.7125 1.84058C14.9859 2.11401 14.9859 2.57886 14.7125 2.85229L6.67344 10.8914C6.4 11.1648 5.93516 11.1648 5.66172 10.8914Z" fill="#0B70E2" />
                    </svg>
                    <p>{textSecondary}</p>
                </div>


                <div className='line_option'></div>


                <div className='container_option'>
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66172 10.8914L1.12266 6.35229C0.849219 6.07886 0.849219 5.61401 1.12266 5.34058L2.10703 4.3562C2.38047 4.08276 2.81797 4.08276 3.09141 4.3562L6.18125 7.4187L12.7438 0.856201C13.0172 0.582764 13.4547 0.582764 13.7281 0.856201L14.7125 1.84058C14.9859 2.11401 14.9859 2.57886 14.7125 2.85229L6.67344 10.8914C6.4 11.1648 5.93516 11.1648 5.66172 10.8914Z" fill="#0B70E2" />
                    </svg>
                    <p>{textBottom}</p>
                </div>


            </div>

        </>
    )
}

export default Option
import React from 'react'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const Header = () => {
    return (
        <>
            {/* Header */}
            <div className='Mainheader'>
                <div style={{ paddingLeft: '20px' }}>
                    <img style={{ width: '110Px', height: '40px' }} alt='Logo' src='https://imgs.bharatmatrimony.com/bmimgs/bharatmatrimony-logo.png' width="200px" height="100px"></img>
                </div>
                <div className='SideNavbar'>
                    <div >
                        <span className='Loginstyle'>Login</span>
                    </div>
                    <div className='Help-styling'>
                        <span className='Helpstyle'><QuestionMarkIcon style={{ border: '1px solid gray', height: '21px', borderRadius: '50%', padding: '2px', color: 'gray' }} /> Help</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
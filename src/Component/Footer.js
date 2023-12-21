import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* Footer Links */}
            <div className='FooterStyle'>
                <div className='FooterCategory'>
                    <h2 style={{ borderBottom: ' 1px solid #bfbfbf', paddingBottom: '15px' }}>Need Help?</h2>
                    <div style={{ marginTop: '15px' }}>
                        <div>Member Login</div>
                        <div>  Sign Up</div>
                        <div>Partner Search</div>
                        <div>How to Use Shaadi.com</div>
                        <div>Premium Memberships</div>
                        <div>Customer Support</div>
                        <div> Site Map</div>
                    </div>
                </div>

                <div className='FooterCategory'>
                    <h2 style={{ borderBottom: ' 1px solid #bfbfbf', paddingBottom: '15px' }}>Company</h2>
                    <div style={{ marginTop: '15px' }}>
                        <div><Link to="/about" className='LinkStyle'>About Us</Link></div>
                        <div>Shaadi Blog</div>
                        <div>Careers</div>
                        <div>Awards & Recognition</div>
                        <div>Cov-Aid</div>
                        <div>Customer Support</div>
                        <div>Contact Us </div>
                    </div>
                </div>

                <div className='FooterCategory'>
                    <h2 style={{ borderBottom: '1px solid #bfbfbf', paddingBottom: '15px' }}>Privacy & You</h2>
                    <div style={{ marginTop: '15px' }}>
                        <div>Terms of Use</div>
                        <div>Privacy Policy</div>
                        <div>Be Safe Online</div>
                        <div>Report Misuse </div>
                    </div>
                </div>

                <div className='FooterCategory'>
                    <h2 style={{ borderBottom: '1px solid #bfbfbf', paddingBottom: '15px' }}>More</h2>
                    <div style={{ marginTop: '15px' }}>
                        <div>VIP Shaadi</div>
                        <div>Select Shaadi</div>
                        <div>Sangam</div>
                        <div>Shaadi Centres</div>
                        <div>Success Stories</div>
                        <div>Shaadi Live</div>
                    </div>
                </div>

            </div>

            {/* Footer CopyRight */}
            <div className='Copyrightstyle'>
                <span style={{ fontSize: '0.7rem' }}>© 1996-2023 ShaadiWala.com, The World's Couple Matching™</span>
            </div>
        </>
    )
}

export default Footer
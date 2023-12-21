import React, { useState } from 'react'
import './Home.css';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CountryCode from './CountryCode';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import LockIcon from '@mui/icons-material/Lock';

const Home = () => {

    const defaultprofile = [
        {
            id: 1,
            name: "Myself"
        },
        {
            id: 2,
            name: "Daughter"
        },
        {
            id: 3,
            name: "Son"
        },
        {
            id: 4,
            name: "Sister"
        },
        {
            id: 5,
            name: "Brother"
        },
        {
            id: 6,
            name: "Relative"
        },
        {
            id: 7,
            name: "Friend"
        },
    ]
    const [LookingProfile, setLookingProfile] = useState('');
    const [Name, setName] = useState("");
    const [PhoneCode, setPhoneCode] = useState('');
    const [Mobileno, setMobileno] = useState('');

    const RegisterUser = () => {
        console.log(Name, PhoneCode, Mobileno, LookingProfile)
        if (Name !== "" && PhoneCode !== "" && Mobileno !== "" && LookingProfile !== "") {
        }
    }

    return (
        <>
            {/* Header */}
            {/* <div className='Mainheader'>
                <div style={{ paddingLeft: '20px' }}>
                    <img style={{ width: '110Px', height: '40px' }} alt='Logo' src='https://imgs.bharatmatrimony.com/bmimgs/bharatmatrimony-logo.png' width="200px" height="100px"></img>
                </div>
                <div className='SideNavbar'>
                    <div >
                        <span className='Loginstyle'>Login</span>
                    </div>
                    <div >
                        <span className='Helpstyle'><QuestionMarkIcon style={{ border: '1px solid gray', height: '21px', borderRadius: '50%', padding: '2px', color: 'gray' }} /> Help</span>
                    </div>
                </div>
            </div> */}

            {/* Registration Page */}
            <div className='RegistrationStyle'>
                <div className='RegistrationBody'>
                    <div className='RegisterLeftSide' >
                        <h2 style={{ marginBottom: '0px' }}>
                            The biggest and most trusted  </h2>
                        <h2 style={{ marginTop: '0px' }}> matrimony service for Indians!</h2>
                        <div>
                            <span style={{ fontSize: '1.1rem' }}>Now find matches based on your hobbies & interests</span>
                        </div>
                    </div>
                    <div>
                        <div className='UpperRegisterBox'>
                            Create a Matrimony Profile
                        </div>
                        <div className='RegisterMainForm' style={{ backgroundColor: 'white', borderRadius: '20px' }}>
                            <div className='RegisterForm'>
                                <div style={{ textAlign: 'center', fontSize: '20px' }}>Find your perfect match</div>

                                <select name="" id=""
                                    onChange={(e) => { setLookingProfile(e.target.value) }}
                                    style={{ width: '97%', margin: '20px 0px', height: '42px', borderRadius: '10px', padding: '11px 0' }}>
                                    {
                                        defaultprofile.map((data, index) => {
                                            return (
                                                <>
                                                    <option key={index} value={data.name}
                                                        onChange={(e) => { setLookingProfile(e.target.value) }}
                                                    >{data.name}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                                {/* <input className='RegisterInputStyle' placeholder='Matrimony Profile..' ></input> */}

                                <input className='RegisterInputStyle' placeholder='Name' onChange={(e) => { setName(e.target.value) }} style={{ marginTop: '10px' }}></input>

                                <div className='Countrystyle'>
                                    <select name="" id="" style={{ width: '20%', height: '42px', borderRadius: '10px', padding: '11px 0' }}
                                        onChange={(e) => { setPhoneCode(e.target.value) }}>
                                        <option value={""}>Select</option>
                                        {
                                            CountryCode.map((data, index) => {
                                                return (
                                                    <>
                                                        <option key={index}
                                                            value={data.dial_code}>{data.name}-{data.dial_code}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                    <input className='RegisterInputStyle' type='number' placeholder='Enter Mobile Number' onChange={(e) => { setMobileno(e.target.value) }} style={{ marginTop: '10px', width: '65%' }} ></input>
                                </div>
                                <div>
                                    <button className='RegisterButtonStyle' onClick={() => { RegisterUser() }}>REGISTER FREE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Info */}
            <div style={{ backgroundColor: '#f1f1f1', }}>
                <div className="CompanyInfo">
                    <div className='CompanyTile1'>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-1.svg" alt="PercentageImage" style={{ height: '55px', width: '56px' }}></img>
                        </div>
                        <div className='CompanyTitle'>100%</div>
                        <div className='Companydesc'>Mobile-verified profiles</div>
                    </div>
                    <div className='CompanyBar'></div>

                    <div className='CompanyTile1'>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="	https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-2.svg" alt='customerImage' style={{ height: '55px', width: '56px' }}></img>
                        </div>
                        <div className='CompanyTitle'>4 Crores+</div>
                        <div className='Companydesc'>Customers served</div>
                    </div>
                    <div className='CompanyBar'></div>

                    <div className='CompanyTile1'>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-3.svg" alt='YearImage' style={{ height: '55px', width: '56px' }}></img>
                        </div>
                        <div className='CompanyTitle'>23 Years</div>
                        <div className='Companydesc'>of successful matchmaking</div>
                    </div>

                </div>
            </div>

            <div>
                <div className='CompanyProduct'>
                    <div className='AdvertiseImage'>
                        <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/limca-records-img-new.png?0" alt="ProductImage"></img>
                    </div>
                    <div className='CompanyBar'></div>
                    <div>
                        <span>Featured in the Limca Book of Records for highest number of documented marriages online</span>
                    </div>
                </div>
            </div>


            {/* Promotion */}
            <div className='PromotionStyle'>
                <div className='Promotion1'>
                    <img style={{ width: '100%', height: '100%' }} src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/relevant-filters-img-new.png" alt=""></img>
                </div>
                <div className='Promotion2'>
                    <div>
                        <h2>
                            Choose by Interests, Location and other relevant filters
                        </h2>
                        <span>Customize your partner search with filters like Hobbies, Location and more. Find your suitable match!</span>
                    </div>
                </div>
            </div>

            {/* App Features */}
            <div className='PromotionStyle' style={{ marginTop: '50px' }}>
                <div className='Promotiontext'>
                    <h2>Connect with matches the way you like</h2>
                    <div className='Featuresstyle'>
                        <div>
                            <img src="//imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-list-1.svg" alt="connect matches" />
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '10px' }}>Voice call</h4>
                            <span>Talk to matches directly through voice calls</span>
                        </div>
                    </div>

                    <div className='Featuresstyle'>
                        <div>
                            <img src="	https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-list-2.svg" alt="connect matches" />
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '10px' }}>Message</h4>
                            <span>Connect with matches instantly through messaging</span>
                        </div>
                    </div>

                    <div className='Featuresstyle'>
                        <div>
                            <img src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-list-3.svg" alt="connect matches" />
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '10px' }}>Video call</h4>
                            <span>Meet your matches virtually with video calls</span>
                        </div>
                    </div>
                </div>
                <div className='Promotion1'>
                    <img style={{ width: '100%', height: '100%' }} src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/connect-matches-img.png?0" alt=""></img>
                </div>
            </div>

            {/* Testimonial Carousel */}
            {/* Matrimony Service with Millions of Success Stories */}

            <div style={{ textAlign: 'center', width: '90%', margin: '60px auto' }}>
                <h2 className='testimonialheader'>Matrimony Service with Millions of Success Stories </h2>
                <div >
                    <Carousel autoplay={true} labels={false} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} showArrows={false} showIndicators={false}>
                        {
                            defaultprofile.map((data, index) => {
                                return (
                                    <>
                                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                            <div className='TestimonalCard'>
                                                <div style={{ marginBottom: '10px' }}>
                                                    <img src="https://img.shaadi.com/success-story/8SH97865398-eSH20684497-big.jpg" alt=""></img>
                                                </div>
                                                <span style={{ fontSize: '1.3rem' }}>Vinod & Aishwarya</span>

                                                <div style={{ width: '80%', margin: 'auto', marginTop: '10px' }}>
                                                    <span style={{ fontSize: '0.7rem', marginTop: '20px' }}>
                                                        I found my match in Shaadi.com an I'm not even king.
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='TestimonalCard'>
                                                <div style={{ marginBottom: '10px' }}>
                                                    <img src="https://img.shaadi.com/success-story/uSH13541906-4SH64784837-big.jpg" alt=""></img>
                                                </div>
                                                <span style={{ fontSize: '1.3rem', marginTop: '5px' }}>Vinod & Aishwarya</span>

                                                <div style={{ width: '80%', margin: 'auto', marginTop: '10px' }}>
                                                    <span style={{ fontSize: '0.7rem', marginTop: '20px' }}>
                                                        I found my match in Shaadi.com an I'm not even king.
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='TestimonalCard'>
                                                <div style={{ marginBottom: '10px' }}>
                                                    <img src="https://img.shaadi.com/success-story/8SH90195669-sSH96244259-big.jpg" alt=""></img>
                                                </div>
                                                <span style={{ fontSize: '1.3rem', marginTop: '5px' }}>Vinod & Aishwarya</span>
                                                <div style={{ width: '80%', margin: 'auto', marginTop: '10px' }}>
                                                    <span style={{ fontSize: '0.7rem' }}>
                                                        I found my match in Shaadi.com an I'm not even king.
                                                    </span>
                                                </div>
                                            </div>


                                        </div>
                                    </>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>


            {/* Company Details */}

            <div className='CompanyDetails'>
                <div className='CompsubDetail'>
                    <span><PeopleAltIcon style={{ width: '30px', height: '30px', color: 'rgb(237, 54, 54)' }} /></span>
                    <span>Best Matches</span>
                </div>
                <div className='CompsubDetail'>
                    <span><VerifiedIcon style={{ width: '30px', height: '30px', color: 'rgb(237, 54, 54)' }} /></span>
                    <span>Verified Profiles</span>
                </div>
                <div className='CompsubDetail'>
                    <span><LockIcon style={{ width: '30px', height: '30px', color: 'rgb(237, 54, 54)' }} /></span>
                    <span>100% Privacy</span>
                </div>
            </div>

            <div style={{    padding: '20px 0',marginTop:' 20px',backgroundColor: '#e7e7e7'}}>
                <h3 style={{ textAlign: 'center' }}>Start your search for a perfect match at Bharat Matrimony</h3>
                <div className='Match-Filter-style'>
                    <div className='Filter-Items'>
                        <div><span style={{ fontSize: '0.8rem' }}>I'm looking for a</span></div>
                        <select name="" id="" style={{ height: '31px', borderRadius: '5px', width: '100%' }}
                            onChange={(e) => { setPhoneCode(e.target.value) }}>
                            <option value={""}>Select</option>
                            {
                                CountryCode.map((data, index) => {
                                    return (
                                        <>
                                            <option key={index}
                                                value="women">Women</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className='Filter-Items'>
                        <div><span style={{ fontSize: '0.8rem' }}>Age</span></div>
                        <div className='Filter-Age-Style'>
                            <select name="" id="" style={{ height: '31px', borderRadius: '5px', width: '100%' }}
                                onChange={(e) => { setPhoneCode(e.target.value) }}>
                                <option value={""}>Select</option>
                                {
                                    CountryCode.map((data, index) => {
                                        return (
                                            <>
                                                <option key={index} value={index+18}>{index+18}</option>
                                            </>
                                        )
                                    })
                                }
                            </select>
                            <div><span>to</span></div>
                            <select name="" id="" style={{ height: '31px', borderRadius: '5px', width: '100%' }}
                                onChange={(e) => { setPhoneCode(e.target.value) }}>
                                <option value={""}>Select</option>
                                {
                                    CountryCode.map((data, index) => {
                                        return (
                                            <>
                                                <option key={index} value={index+20}>{index+20}</option>
                                                flex                </>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className='Filter-Items' >
                        <div><span style={{ fontSize: '0.8rem' }}>Mother Tongue</span></div>
                        <select name="" id="" style={{ height: '31px', borderRadius: '5px', width: '100%' }}
                            onChange={(e) => { setPhoneCode(e.target.value) }}>
                            <option value={""}>Select</option>
                            {
                                CountryCode.map((data, index) => {
                                    return (
                                        <>
                                            <option key={index}
                                                value="women">Women</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>


                    <div className='Filter-Items' >
                        <div><span style={{ fontSize: '0.8rem' }}>Caste</span></div>
                        <select name="" id="" style={{ height: '31px', borderRadius: '5px', width: '100%' }}
                            onChange={(e) => { setPhoneCode(e.target.value) }}>
                            <option value={""}>Select</option>
                            {
                                CountryCode.map((data, index) => {
                                    return (
                                        <>
                                            <option key={index}
                                                value="women">Women</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className='Filter-Items' style={{marginTop:'20px'}}>
                       <span className='Start-Button'>Let's Begin</span>
                    </div>
                </div>
            </div>


            <div style={{ width: '100%', backgroundColor: '#ed3636', height: '60px', marginBottom: '40px', marginTop:'40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <span>Start Your Life Story Today!</span>
            </div>

            {/* Footer Links */}
            {/* <div className='FooterStyle'>
                <div className='FooterCategory'>
                    <h2 style={{ borderBottom: ' 1px solid #bfbfbf' , paddingBottom:'15px'}}>Need Help?</h2>
                    <div style={{marginTop:'15px'}}>
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
                    <h2 style={{ borderBottom: ' 1px solid #bfbfbf' , paddingBottom:'15px'}}>Company</h2>
                    <div style={{marginTop:'15px'}}>
                        <div>About Us</div>
                        <div>Shaadi Blog</div>
                        <div>Careers</div>
                        <div>Awards & Recognition</div>
                        <div>Cov-Aid</div>
                        <div>Customer Support</div>
                        <div>Contact Us </div>
                    </div>
                </div>

                <div className='FooterCategory'>
                    <h2 style={{ borderBottom: '1px solid #bfbfbf' , paddingBottom:'15px'}}>Privacy & You</h2>
                    <div style={{marginTop:'15px'}}>
                        <div>Terms of Use</div>
                        <div>Privacy Policy</div>
                        <div>Be Safe Online</div>
                        <div>Report Misuse </div>
                    </div>
                </div>

                <div className='FooterCategory'>
                    <h2 style={{ borderBottom: '1px solid #bfbfbf' , paddingBottom:'15px'}}>More</h2>
                    <div style={{marginTop:'15px'}}>
                        <div>VIP Shaadi</div>
                        <div>Select Shaadi</div>
                        <div>Sangam</div>
                        <div>Shaadi Centres</div>
                        <div>Success Stories</div>
                        <div>Shaadi Live</div>
                    </div>
                </div>

            </div>

            // Footer CopyRight 
            <div className='Copyrightstyle'>
                <span style={{fontSize:'0.7rem'}}>© 1996-2023 ShaadiWala.com, The World's Couple Matching™</span>
            </div> */}
        </>
    )
}

export default Home;
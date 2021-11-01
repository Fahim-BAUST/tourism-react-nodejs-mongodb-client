// import { Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { useLocation, useHistory, NavLink } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';

// import '../Services/Service/Service.js'

// const Register = () => {
//     const { createUserWithEmailandPass, error } = useAuth();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const location = useLocation();
//     const history = useHistory();
//     const redirect_uri = location.state?.from || '/home';

//     const handleEmailChange = e => {
//         setEmail(e.target.value);
//     }

//     const handlePasswordChange = e => {
//         setPassword(e.target.value);
//     }

//     const handleRegistration = e => {
//         e.preventDefault();
//         createUserWithEmailandPass(email, password)
//             .then((result) => {
//                 console.log(result);
//                 alert("succesfully login")
//             })

//     }
//     return (
//         <div>

//             <div className="login container text-center  mx-auto border border-1 mt-5 rounded-3 ">
//                 <h3 className="mt-3 mb-3 text-start fs-3 ">Create Account</h3>
//                 <form className="text-start " onSubmit={handleRegistration}>
//                     <label htmlFor="inputEmail4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Email</label>
//                     <input onBlur={handleEmailChange} type="email" className="form-control border border-secondary" id="inputEmail4" required />

//                     <label htmlFor="inputPassword4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Password</label>
//                     <input onBlur={handlePasswordChange} type="password" className="form-control border border-secondary" id="inputPassword4" required />

//                     <label htmlFor="inputPassword4" style={{ fontSize: "15px" }} className="form-label fw-bold text-danger ">{error}</label>

//                     <button type="submit" style={{ backgroundColor: "goldenrod", color: "black" }} className="btn fw-bold col-xl-12 col-12 col-md-12 mt-3">Continue</button>
//                 </form>
//                 <p className="text-start mt-2" style={{ fontSize: "13px" }}>Allready registered? <NavLink className="text-decoration-none" to="/login">Sign in</NavLink></p>

//             </div>

//         </div>
//     );
// };

// export default Register;
import React, { useState } from 'react'
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LeftArrow from '../assets/left-arrow.png';
import ConfirmAlert from '../components/ConfirmAlert';
function Register() {
    const navigate = useNavigate();
    const handleBackClick = () =>{
        navigate('/');
    }
    const [showConfirmAlert, setShowConfirmAlert] = useState(false);
    const name = useRef();
    const password = useRef();
    const email = useRef();
    const linkden_url = useRef();
    const instagram_url = useRef();
    const twitter_url = useRef();
    const [errors, setErrors] = useState({}); // State to store validation errors

    const validateForm = () => {
        const newErrors = {};
        
        // Check if fields are empty
        if (!name.current.value) newErrors.name = "Name is required";
        if (!password.current.value) newErrors.password = "Password is required";
        if (!email.current.value) newErrors.email = "Email is required";
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.current.value && !emailRegex.test(email.current.value)) {
            newErrors.email = "Invalid email format";
        }

        // Validate URL format
        const urlRegex = /^(https:\/\/)?([\w-]+)\.([\w-]{2,})(\/\S*)?$/;
        if (linkden_url.current.value && !urlRegex.test(linkden_url.current.value)) {
            newErrors.linkden_url = "Invalid LinkedIn URL";
        }
        if (twitter_url.current.value && !urlRegex.test(twitter_url.current.value)) {
            newErrors.twitter_url = "Invalid Twitter URL";
        }
        if (instagram_url.current.value && !urlRegex.test(instagram_url.current.value)) {
            newErrors.instagram_url = "Invalid Instagram URL";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };
    const [ReadMoreClicked, setReadMoreClicked] = useState(0);
    const ReadMoreClickFunc = () => {
        setReadMoreClicked(prevState => prevState === 0 ? 1 : 0);
        setTimeout(()=>{
            setReadMoreClicked(prevState => prevState === 0 ? 1 : 0);
        },3500)
    };
    function ReadMoreContent(){
        return(
            <div className='mt-3'>
                <p className="text-gray-300 mt-1">Information you provide will be forwarded to</p>
                <p className="text-gray-300 mt-1"> SPOC(Single-point of contact) and then be verified.</p>
            </div>
        )
    }
    function ReadMoreButton(){
        return(
            <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2" onClick={ReadMoreClickFunc}>Read More</button>
        )
    }
    const handleSignUp = (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      const NameToBeSent = name.current.value;
      const PasswordToBeSent = password.current.value;
      const EmailToBeSent = email.current.value;
      const Linkden_Link = 'https://'+linkden_url.current.value;
      const Twitter_Link = 'https://'+ twitter_url.current.value;
      const InstaGram_Link='https://'+instagram_url.current.value;
      const verified = false;
      axios.post("http://localhost:4000/signup", { NameToBeSent, PasswordToBeSent ,EmailToBeSent,Linkden_Link,Twitter_Link,InstaGram_Link,verified})
        .then(response => {
          console.log("Credentials Successfully Stored");
        })
        .catch(error => {
          console.log('Sign-up error:', error);
        });
        setShowConfirmAlert(true);
    }
  return (
    <div>
      <div className="relative h-screen md:flex">
      <button className="absolute top-4 left-4 bg-white-500 text-white py-2 px-4 rounded-lg z-10 w-12 h-12" onClick={handleBackClick}>
            <img src={LeftArrow} alt="back"/>
        </button>
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">Hello there,Alumini!</h1>
            <p className="text-white mt-1">Verification may take some time. We appreciate your patience.</p>
            {ReadMoreClicked === 1 ? <ReadMoreContent />: <ReadMoreButton /> }
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" ></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form className="bg-white">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Please provide your details here</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Confirmation will be sent to your email in a few days.</p>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clipRule="evenodd" />
				</svg>
				<input className="pl-2 outline-none border-none" type="text" name=""  ref={name} id="" placeholder="Full name" />
      </div>
      {errors.name && <p className="text-red-500">{errors.name}</p>}
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none" ref = {email} type="text" name="" id="" placeholder="Email Address" />
      </div>
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input className="pl-2 outline-none border-none" type="text" name="" id=""  ref={password} placeholder="Password" />
      </div>
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      <div className="flex items-center mt-2">
    <p className="py-2.5 px-3 text-gray-500 bg-white border-2 border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">
        https://
    </p>
    <input
        type="text"
        placeholder="linkden-url.com"
        ref = {linkden_url}
        className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
    />
</div>
{errors.linkden_url && <p className="text-red-500">{errors.linkden_url}</p>}

<div className="flex items-center mt-2">
    <p className="py-2.5 px-3 text-gray-500 bg-white border-2 border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">
        https://
    </p>
    <input
        type="text"
        placeholder="twitter-url.com"
        ref={twitter_url}
        className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
    />
</div>
{errors.twitter_url && <p className="text-red-500">{errors.twitter_url}</p>}
<div className="flex items-center mt-2">
    <p className="py-2.5 px-3 text-gray-500 bg-white border-2 border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">
        https://
    </p>
    <input
        type="text"
        placeholder="instagram-url.com"
        ref={instagram_url}
        className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
    />
</div>
{errors.instagram_url && <p className="text-red-500">{errors.instagram_url}</p>}

      <input type="file" accept="image/*" id="imageInput" onChange={(e) => handleFileChange(e)} className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border-2 rounded-2xl file:bg-gray-100 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"/>

					<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" onClick={handleSignUp}>Submit</button>
			 		<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
		</form>
	</div>
    {showConfirmAlert && (
        <ConfirmAlert
          showConfirmAlert={showConfirmAlert}
          onClose={() => setShowConfirmAlert(false)}
        />
      )}
</div>
    </div>
  )
}

export default Register

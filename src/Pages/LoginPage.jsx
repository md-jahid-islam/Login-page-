import React, { useState } from 'react'
import { Bounce, toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css';

 const LoginPage = () => {
 //=================variable part start
  const [Email , setEmail]                            = useState ('')
  const [EmailError , setEmailError]                  = useState ('')
  const [password , setPassword]                      = useState ('')
  const [passwordError , setPasswordError]            = useState ('')


 //================function part start
  const handelEmail = (e)=>{
  setEmail(e.target.value)
  setEmailError('')

  }
 const handelPasword = (e)=>{
 setPassword(e.target.value)   
 setPasswordError('')

 }
 
 //================ submit part start
  const handelsubmit = (e)=>{
   e.preventDefault()
   if(!Email){
    setEmailError('please enter your error')
   }
   if(!password){
    setPasswordError('please enter your error')
   }
   else{
    toast.success('🦄 Login Success easy!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
   }

  }
  
  return (
   <>
    <div className="container">
        <div className=' from_row flex justify-center items-center mt-[220px]'>
         <div className=' from_coll '>
            <h2 className=' text-3xl font-bold text-[#000]'> wellcom to back login page</h2>
            <form onSubmit={handelsubmit}>
          
            <label className=' text-[24px] font-bold mt-5' > email</label>
            <br />
             <input onChange={handelEmail} className=' w-[350px] h-[55px] border-none border border-black mt-5 p-5 rounded-lg' type="text" placeholder=' enter your email' />
             <p className='font-bold mt-5 text-red-600'>{EmailError}</p>
             <br />
             <label className='text-[24px] font-bold mt-5'>Password</label>
              <br />
             <input onChange={handelPasword } className=' w-[350px] h-[55px] border-none border border-black mt-5 p-5 rounded-lg' type="text" placeholder=' enter your password' />
             <p className=' font-bold mt-5 text-red-600'> {passwordError}</p>
             <button type='submit' className=' text-[16px] w-[350px] h-[55px] bg-green-600 hover:scale-105 transition mt-5 rounded-lg'>LOGIN</button>

            </form>
                
         </div>
        </div>
    </div>
   
   </>
  )
}

export default LoginPage
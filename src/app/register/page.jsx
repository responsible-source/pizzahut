"use client"
import React from 'react'


const page = () => {
  // const [email, Setemail] = useState()
  // const [password, Setpassword] = useState()

  // const handleSubmit = (ev) =>{
  //   ev.preventDefault();
  //   fetch('/api/register', {
  //     method: 'POST',
  //     body: JSON.stringify({email, password}),
  //     headers:{'Content-Type': 'application/json'},
  //   });
  // }
  return (
    <div className='mt-10'>
        <div>
            <h3 className='text-center text-2xl text-Red'>Register</h3>
        </div>
        <form onSubmit={handleSubmit} action="" className='block max-w-xs mx-auto'>
            <input type="email" placeholder='Email' value={email} onChange={ev => Setemail(ev.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={ev => Setpassword(ev.target.value)} />
            <button type='submit'>Register</button>
            <div className='my-4 text-center text-gray-500'>
              Or login with provider
            </div>
            <button className='flex justify-center gap-2'>
              <img src="/google.png" alt="google" className='w-5 h-5' />
              Login with google
              </button>
        </form>
    </div>
  )
}

export default page
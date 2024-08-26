import React, { useState } from 'react'

const Login = () => {

  const [name,setName] = useState('');
  const [msg, setMsg] = useState('');
  
  const [email,setEmail] = useState('');
  const [mailmsg,setMailmsg] = useState('');

  const [pass,setPass] = useState('');
  const [passmsg,setPassmsg] = useState('');

  const [isSubmit , setIsSubmit] = useState(false);

  const rightName = (e) => {
    let isValid = "true";
    const value = e.target.value;
    
    for (let i = 0; i < value.length; i++) {
      const asci = value.charCodeAt(i);
      if (!(asci >= 65 && asci <= 90) && !(asci >= 97 && asci <= 122) && asci != 32) {
        isValid = false;
        break;
      }
    }
    
    if(!isValid) {
      setMsg("please enter valid name");
    } else {
      setMsg('');
    }

    setName(value);
  }

  const rightEmail = (e) => {
    const value = e.target.value;
    if(! value.includes("@gmail.com")) {
      setMailmsg("please enter valid email")
    } else {
      setMailmsg("");
    }

    setEmail(value);
  }

  const strongPass = (e) => {
    const value = e.target.value
    if(!(/\d/.test(value)) || !(/[a-zA-Z]/.test(value))) {
      setPassmsg("chose strong password")
    } else {
      setPassmsg('');
    }
    setPass(value);
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

  }
  

  const sameStyle = 'rounded-3xl h-12 w-96 text-center text-grey-400'

  return (
    <div className='h-screen flex justify-center items-center w-full' >
      {!isSubmit ? (
      <form onSubmit={handleSubmit} className='h-1/2 w-1/3 flex flex-col justify-center items-center space-y-12 rounded-xl bg-gray-400'>
        <input type='text' placeholder='name' value={name} onChange={rightName} className={sameStyle} />
          {msg && <p className='text-red-500'>{msg}</p>}
        <input type='text' placeholder='email' value={email} onBlur={rightEmail} onChange={(e) => setEmail(e.target.value)} className={sameStyle} />
          {mailmsg && <p className='text-red-500'>{mailmsg}</p>}
        <input type='text' placeholder='password' onBlur={strongPass} onChange={(e) => setPass(e.target.value)} className={sameStyle} />
          {passmsg && <p className='text-red-500'>{passmsg}</p>}
        <button type='submit' className={`${sameStyle} bg-blue-500 text-white hover:bg-blue-700`}>Submit</button>
      </form>
      ) : (
        <div className='text-center'>
          <p className='text-green-600 text-2xl'>Login Successfully</p>
        </div>
      )}
    </div>
  )
}

export default Login
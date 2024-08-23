import React from 'react'

const SignUp = ({setName,setEmail,setPhone,name,email,phone,handleSubmit}) => {
  return (
    <div className='over' >
      <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>

    </div>
  )
}

export default SignUp

import React from 'react'

const Form = () => {
  return (
    <form className='flex flex-col gap-4'>
        <input type='text' className='input' placeholder='full name'/>
        <input type='text' className='input' placeholder='email'/>
        <input type='text' className='input' placeholder='phone number'/>
      <textarea className='textarea mb-2' placeholder='your message'/>
      <button type='submit' className='btn self-start'>Sent Message</button>
    </form>
  )
}

export default Form

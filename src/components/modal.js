import { useState } from 'react'
import './modal.css'
export const Modal = ({ children, title, label }) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(toggle => !toggle)
  }
  return (
    <>
      <button onClick={handleClick} className='open'>{label}</button>
      {toggle && (
        <div className='modal-container'>
          <div className='modal'>
            <header>
              <h2>{title}</h2>
              <button className='close' onClick={handleClick}>x</button>
            </header>
            {children}
          </div>
        </div>)
      }

    </>
  )
}

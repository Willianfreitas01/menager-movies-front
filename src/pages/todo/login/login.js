import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Modal } from '../../../components/modal'
import { client } from '../../../service/client'

export const Login = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/home')
  }
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  client.post('/login', {
    senha: senha, email: email
  })
    .then(response => {
      if (response.data.auth === true) {
        console.log(response.data.message)
      } else {
        console.log('alguma coisa')
      }
    })
    .catch(error => console.error(error))

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleChangeSenha = (event) => {
    setSenha(event.target.value)
  }
  return (
    <>
      <Modal title="Login" label="Login here">
        <form>
          <ul>
            <li>
              <input type='text' onChange={handleChangeEmail} value={email} placeholder='Email'></input>
            </li>
            <li>
              <input type='password' onChange={handleChangeSenha} value={senha} placeholder='Senha'></input>
            </li>
            <li>
              <button type="button" onClick={handleClick}>Entrar</button>
            </li>
          </ul>
        </form>
      </Modal >
    </>
  )
}

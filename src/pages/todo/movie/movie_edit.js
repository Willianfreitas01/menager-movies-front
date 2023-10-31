import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Modal } from '../../../components/modal'
import { client } from '../../../service/client'

import { Button } from '../../../components/Button/buttonComponent'

export const MovieId = () => {
  const [values, setValues] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    client.get(`/movies/${id}`)
      .then((response) => {
        setValues(response.data)
      })
  }, [])
  const [title, setTitle] = useState('')
  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const [gender, setGender] = useState('')
  const handleChangeGender = (e) => {
    setGender(e.target.value)
  }

  const [classification, setClassification] = useState('')
  const handleChangeClassification = (e) => {
    setClassification(e.target.value)
  }

  const [director, setDirector] = useState('')
  const handleChangeDirector = (e) => {
    setDirector(e.target.value)
  }

  const [subtitle, setSubtitle] = useState('')
  const handleChangeSubtitle = (e) => {
    setSubtitle(e.target.value)
  }
  const [writer, setWriter] = useState('')
  const handleChangeWriter = (e) => {
    setWriter(e.target.value)
  }
  const [studio, setStudio] = useState('')
  const handleChangeStudio = (e) => {
    setStudio(e.target.value)
  }
  const [actors, setActors] = useState('')
  const handleChangeActors = (e) => {
    setActors(e.target.value)
  }
  const [resume, setResume] = useState('')
  const handleChangeResume = (e) => {
    setResume(e.target.value)
  }
  // const [date, setDate] = useState('')
  // const handleChangeDate = (e) => {
  //   setDate(e.target.value)
  // }
  const [awards, setAwards] = useState('')
  const handleChangeAwards = (e) => {
    setAwards(e.target.value)
  }
  // const [note, setNote] = useState('')
  // const handleChangeNote = (e) => {
  //   setNote(e.target.value)
  // }

  const click = () => {
    client.put(`/movies/${id}`, {
      title: title,
      gender: gender,
      classification: classification,
      director: director,
      subtitle: subtitle,
      writer: writer,
      studio: studio,
      actors: actors,
      resume: resume,
      awards: awards
    })
      .then(response => {
        alert(('filme editado com sucesso!'))
        location.reload()
      })
      .catch(error => console.log(error))
  }
  const deleteId = () => {
    const movieTitle = values.title
    client.delete(`/movies/${id}`, values)
      .then(() => {
        alert(`${movieTitle} foi deletado!`)
        navigate('/home')
      })
  }

  return (
    <>
      <div>
        <Modal title='information modal' label='modal'>
          <form>
            <ul>
              <li>
                <div className='lista'>
                  <p>title: {values.title}</p>
                </div>
              </li>
              <li>
                <div className='lista'>
                  <p>subtitle: {values.subtitle}</p>
                </div>
              </li>
              <li>
                <div className='lista'>
                  <p>director: {values.director}</p>
                </div>
              </li>
              <li>
                <div className='lista'>
                  <p>gender: {values.gender}</p>
                </div>
              </li>
              <li>
                <div className='lista'>
                  <p>classification: {values.classification}</p>
                </div>
              </li>
              <li>
                <div className='lista'>
                  <p>data de lançamento: {values.releaseDate}</p>
                </div>
              </li>
              <li>
                <div className='lista'>
                  <p>writer: {values.writer}</p>
                </div>
              </li>
              <li>
                <div className='lista'>
                  <p>studio: {values.studio}</p>
                </div>
              </li>
              <li>
                <div className='lista'>
                  <p>actors: {values.actors}</p>
                </div>
              </li>
              <li>
                <div className='lista'>
                  <p>resume: {values.resume}</p>
                </div>
              </li>
              <button type='button' onClick={click}></button>
            </ul>
          </form>
        </Modal>
        <Modal title='information modal' label='edit modal'>
          <form>
            <ul>
              <li>
                <input value={title} onChange={handleChangeTitle} type='text' placeholder='title'></input>
              </li>
              <li>
                <input value={gender} onChange={handleChangeGender} type='text' placeholder='gender'></input>
              </li>
              <li>
                <input value={classification} onChange={handleChangeClassification} type='text' placeholder='classification'></input>
              </li>
              <li>
                <input value={subtitle} onChange={handleChangeSubtitle} type='text' placeholder='subtitle'></input>
              </li>
              <li>
                <input value={director} onChange={handleChangeDirector} type='text' placeholder='director'></input>
              </li>
              <li>
                <input value={writer} onChange={handleChangeWriter} type='text' placeholder='writer'></input>
              </li>
              <li>
                <input value={studio} onChange={handleChangeStudio} type='text' placeholder='studio'></input>
              </li>
              <li>
                <input value={actors} onChange={handleChangeActors} type='text' placeholder='actors'></input>
              </li>
              <li>
                <input value={resume} onChange={handleChangeResume} type='text' placeholder='resume'></input>
              </li>
              <li>
                <input value={awards} onChange={handleChangeAwards} type='text' placeholder='awards'></input>
              </li>
              <li>
                <button className='buttonMovie' type="button" onClick={click} >Registrar</button>
              </li>
            </ul>
          </form>
        </Modal>
        <Button onClick={deleteId} text={'deletar filme'} />
      </div>
    </>
  )
}

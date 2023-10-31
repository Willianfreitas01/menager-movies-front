import { Link } from 'react-router-dom'
import { client } from '../../../service/client'
import { useEffect, useState } from 'react'
import { Modal } from '../../../components/modal'
import './home.css'
const List = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    client.get('/movies')
      .then(response => {
        setItems(response.data)
      })
  }, [])

  return (
    <>
      <form>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <div>
                <Link classname='link' to={`/movie/${item.id}`}> {item.title} {item.subtitle}
                </Link>
              </div>
              <img alt='erro ao carregar imagem' className='movie' src={item.image}></img>
            </li>)
          )}
        </ul>
      </form>
    </>
  )
}
export const Home = () => {
  return (
    <>
      <Modal title='All Movies' label='Movies library'>
        <List />
      </Modal>

    </>
  )
}

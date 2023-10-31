
import { Button } from '../Button/buttonComponent'
import { Form } from './form'
import { Input } from '../input/inputComponent'

export const MovieForm = ({ textButton, onClick, onChange }) => {
  return (
    <>
      <Form>
        <div>
          <Input name='title' type='text' placeholder='title' onChange={onChange} />
          <Input name='subtitle' type='text' placeholder='Subtitle' onChange={onChange} />
        </div>
        <div>
          <Input name='resume' type='text' placeholder='Resume' onChange={onChange} />
        </div>
        <div>
          <Input name='gender' type='text' placeholder='Gender' onChange={onChange} />
          <Input name='classification' type='text' placeholder='Classification' onChange={onChange} />
        </div>
        <Input name='release_date' type='date' placeholder='Release Date' onChange={onChange} />
        <Input name='image' type='text' placeholder='Image' onChange={onChange} />
        <div>
          <Input name='director' type='text' placeholder='Director' onChange={onChange} />
          <Input name='writer' type='text' placeholder='writer' onChange={onChange} />
        </div>
        <Input name='studio' type='text' placeholder='Studio' onChange={onChange} />
        <Input name='note' type='text' placeholder='Stars' onChange={onChange} />
        <div>
          <Input name='actors' type='text' placeholder='actors' onChange={onChange} />
          <Input name='awards' type='text' placeholder='awards' onChange={onChange} />
        </div>
        <Button text={textButton} onClick={onClick} />
      </Form>
    </>
  )
}

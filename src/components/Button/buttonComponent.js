import './styles.css'
export const Button = ({ text, onClick, icon }) => {
  return (
    <>
      <div>
        <button onClick={onClick}>
          {text}</button>
      </div>
    </>
  )
}

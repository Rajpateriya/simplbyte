import './Button.css'
const Button = ({isOutline,text,icon}) => {
  return (
        <button className={isOutline ? "outline_btn" :"primary_btn"}>
            {icon}
            {text}
        </button>
  )
  }
export default Button;
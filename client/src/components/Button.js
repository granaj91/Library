const Button = ({ text, color, onClick }) => {
    return (
        <button className="button" 
            onClick={onClick} 
            style={ {backgroundColor: color }} 
        >{text}</button>     
    )
}

export default Button

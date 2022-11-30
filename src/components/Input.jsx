const inputStyle = {
    border: "2px solid bluelight",
    outline: "none",
    padding: "15px",
}
const Input = ({type, placeholder}) => {
    return <input style={inputStyle} type={type} placeholder={placeholder}/>
}

export default Input

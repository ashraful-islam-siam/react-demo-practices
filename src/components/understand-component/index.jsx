
const inputStyle = {
    // padding: '1rem',
    border: '1px solid #ddd',
    outline: 'none'
}

const Input = props => (
    <>
        <label>{props.label}</label> <br />
        <input style={inputStyle} type={props.type} placeholder={props.placeholder} />
    </>
)

const UnderstandComponent = () => {
    const  containerStyle = {
        width: '50%',
        margin: '10px auto',
        padding: '20px',
        backgroundColor: '#343727',
        borderRadius: '5px'
    }
    return <div style={containerStyle} className="container">
        <Input 
            label="Enter Name: "
            type='text'
            placeholder={'Enter your name?'}
        />
    </div>
}

export default UnderstandComponent;
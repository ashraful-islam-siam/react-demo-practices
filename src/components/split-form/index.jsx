import { Component } from "react";
import PropTypes from 'prop-types'

const TextInput = (props) => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input className="form-control my-2" type={props.type} name={props.name} placeholder={props.placeholder} onChange={onChange} 
        value={props.value}
        />
    </div>
)

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

class SplitForm extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        e.target.reset()
        this.setState({
            name: '', email: '', password: ''
        })
    }
    render() {
        const { name, email, password  } = this.state
        return (
            <div className="container mt-3">
                <h2 className="display-5 text-center">Working with forms in React</h2>
                <form onSubmit={this.handleSubmit} style={{width: "660px", margin: "auto"}}>
                <hr />
                    <TextInput 
                        placeholder="Enter name"
                        value={name}
                        name="name"
                    />
                    <input className="form-control my-2" type="text" name="name" placeholder="Ashraful Islam" />
                    <input className="form-control my-2" type="email" name="email" placeholder="ashrafulislam@gmail.com" />
                    <input className="form-control my-2" type="password"  
                    name="password"
                    placeholder="**********" />
                    <button style={{width: '100%'}} className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default SplitForm
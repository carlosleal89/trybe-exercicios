import React from "react";
import './Form.css';
import Infos from "./Infos";

class Form extends React.Component {
    state = {
        name: '',
        email: '',
        about: '',
        check: false,
        file: undefined,
        formularioComErros: true,        
    }    

    handlerChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        }, this.handleError)        
    }

    handleError = () => {
        const { name, email } = this.state;
        console.log(name.length);
        if (name.length > 0 && email.length > 0) {            
            this.setState({
                formularioComErros: false,
            })
        } else {
            this.setState({
                formularioComErros: true,
            })
        }
        
    }
   
    render() {
        const { name, email, formularioComErros } = this.state;                        
        return(            
           <div >
            <form action="">
            <fieldset className="main-div">
            <select>
            <option></option>            
            </select>
            <Infos name={ name } email={ email } handlerChange={ this.handlerChange }/>
            <input type="checkbox" name="check" id="" onChange={ this.handlerChange } />
            <textarea name="about" onChange={ this.handlerChange } id="" cols="30" rows="10"></textarea>
            <input type="file" name="file" id="" />
            </fieldset>
            </form>
            {formularioComErros ? <span style={ { color: 'red' } }>preencha todos os campos</span> : <span style={ { color: 'green' } }>todos os campos ok</span> }
           
           </div>
        )
    }
}

export default Form
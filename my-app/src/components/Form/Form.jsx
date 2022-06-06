
import React, { Component } from 'react';
import shortid from 'shortid';
import s from './Form.module.css'

class Form extends Component{
    state = {
        name: "",
        lastName: "",
        expirience: 'junior',
        licence: false,
    }
    nameInputId = shortid.generate();
    lastNameInputId = shortid.generate();
    expirienceRaduoId = shortid.generate();
    licenceCheckboxId = shortid.generate();
    

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({
          [name]: value,
        });
    };

    hendleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);

        this.reset();
    };

    hendleLicenceChange = event => {
        this.setState({licence: event.currentTarget.checked })
    }
    
    reset = () => {
        this.setState({
            name: "",
        lastName: "",
        })
    }


    
    render() {
        return (
            <div className={s.Container}>
                <p className={s.Title}>Заповніть Анкету</p>
            <form className={s.Form} onSubmit={this.hendleSubmit}>
          <label className={s.InputTitle} htmlFor={this.nameInputId }>
                    Імя <input className={s.FormName} type="text" name="name" value={this.state.name} onChange={this.handleChange} id={this.nameInputId }/>
          </label>
          <br />
          <label className={s.InputTitle} htmlFor={this.lastNameInputId}>
            Фамілія <input className={s.FormName} type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} id={this.lastNameInputId} />
                </label>
                <p className={s.TitleText} >Ваш Рівень:</p>
                <label className={s.RadioboxTitle} htmlFor={this.expirienceRaduoId}>
                    <input className={s.RadioBox} type="radio" name='expirience' value='junior' onChange={this.handleChange} checked={this.state.expirience==="junior" } id={this.expirienceRaduoId}/>Junior
                </label>
                <label className={s.RadioboxTitle} htmlFor={this.expirienceRaduoId}>
                  <input className={s.RadioBox} type="radio" name='expirience' value='midle' onChange={this.handleChange} checked={this.state.expirience==="midle" } id={this.expirienceRaduoId}/>Midle
                </label>
                <label className={s.RadioboxTitle} htmlFor={this.expirienceRaduoId}>
                   <input className={s.RadioBox} type="radio" name='expirience' value='senior' onChange={this.handleChange} checked={this.state.expirience==="senior" } id={this.expirienceRaduoId}/>Senior
                </label>
                <br />
                <label htmlFor="">
                    <select className={s.Select} name="" id="">
                        <option value="">JS Developer</option>
                        <option value="">Python Developer</option>
                        <option value="">Java Developer</option>
                        <option value="">C# Developer</option>
                        <option value="">C++ Developer</option>
                    </select>
                </label>
                <br />
                <label  htmlFor="licenceCheckboxId">
                        <input className={s.Checkbox}
                            type="checkbox"
                            name='licence'
                            hecked={this.state.licence}
                            onChange={this.hendleLicenceChange}
                            id={this.licenceCheckboxId} />
                        <span className={s.CheckboxSpan}> Даю згоду на обробку даних</span> 
                </label>
                <br />
                <button className={s.Btn} type="submit" disabled={!this.state.licence}>Відправити</button>

                </form>
                </div>
        );
    }

  

}
export default Form;
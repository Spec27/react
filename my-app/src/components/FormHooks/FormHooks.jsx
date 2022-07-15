import { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalstorage";
import s from "./FormHooks.module.css"

export default function FormHooks() {
    const [name, setName] = useLocalStorage('name','');
    const [lastName, setLastName] = useLocalStorage('lastName','');
    const [expirience, setExpirience] = useLocalStorage('junior',null);
    const [licence, setLicence] = useState(false);


    const hendleChange = (event) => {
       const {name,value}= event.currentTarget
       
        switch (name) {
            case "name":
                setName(value)
                break;
            case "lastName":
                setLastName(value)
                break;
            case "expirience":
                setExpirience(value)
                break;
            default:
                return;
        }
        
    }

    const hendleLicenceChange = event => {
        setLicence(event.currentTarget.checked)
    }

    useEffect(()=>{
        
    })

    return (
        <form >
          <label className={s.InputTitle} >
            Імя
            <input
                className={s.FormName}
                type="text"
                name="name"
                value={name}
                onChange={hendleChange} 
             />
            </label>

            <label className={s.InputTitle} >
                Фамілія
                <input className={s.FormName}
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={hendleChange}
                />
            </label>
                <p className={s.TitleText} >Ваш Рівень:</p>
                <label className={s.RadioboxTitle} /* htmlFor={this.expirienceRaduoId} */>
                <input
                    className={s.RadioBox}
                    type="radio"
                    name='expirience'
                    value='junior'
                    onChange={hendleChange}
                    checked={expirience === "junior"} /* id={expirienceRaduoId} */ />Junior
                </label>
                <label className={s.RadioboxTitle}/*  htmlFor={this.expirienceRaduoId} */>
                <input
                    className={s.RadioBox}
                    type="radio"
                    name='expirience'
                    value='midle'
                    onChange={hendleChange}
                    checked={expirience === "midle"} /* id={expirienceRaduoId} */ />Midle
                </label>
                <label className={s.RadioboxTitle} /* htmlFor={this.expirienceRaduoId} */>
                <input
                    className={s.RadioBox}
                    type="radio"
                    name='expirience'
                    value='senior'
                    onChange={hendleChange}
                    checked={expirience === "senior"} /* id={expirienceRaduoId} */ />Senior
            </label>
            <label  /* htmlFor="licenceCheckboxId" */>
                        <input className={s.Checkbox}
                            type="checkbox"
                             name='licence'
                            сhecked={licence}
                            onChange={hendleLicenceChange}
                            /* id={licenceCheckboxId} */ /> 
                        <span className={s.CheckboxSpan}> Даю згоду на обробку даних</span> 
                </label>
       <button type="submit">Реестрація</button>
    </form>
     
    )
}


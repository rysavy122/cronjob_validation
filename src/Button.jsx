import { useState } from 'react';



function Button() {

    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        //
        setBtnState(btnState => !btnState);


    }
    let toggleClassCheck = btnState ? ' active': '';

    return(
        <button title="Wechsel zwischen Hell/Dunkel Modus" onClick={handleClick} className={`btn${toggleClassCheck}`}>🌓 UI Theme</button>

    )
}

export default Button;
    
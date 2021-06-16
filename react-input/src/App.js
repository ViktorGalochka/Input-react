import React from 'react';
import CustomInput from "./input/CustomInput";

function App() {
    return(
        <CustomInput
            error={ 'Something went wrong.' }
            labelValue={ 'Input field label' }
            placeholder={ 'Placeholder' }
            defaultValue={ '' }
            disabled={ false }
        />
    )
}

export default App;

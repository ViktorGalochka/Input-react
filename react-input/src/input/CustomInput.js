import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const StyledForm = styled.form`
label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
    color: #95999F;
`

const StyledButton = styled.input`
    display: block;
    margin-top: 10px;
    background-color: #5F4AE5;
    border: none;
    padding: 3px 5px;
    border-radius: 3px;
    color: #ffffff;
    cursor: pointer; 
`

const StyledInput = styled.input`
    width: 476px;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 24px;
    
    &:focus {
     outline: none;
     border-color: #5F4AE5;    
    }
`

const StyledError = styled.p`
    margin-top: 4px;
    font-size: 12px;
    line-height: 16px;
    color: #FF6155;
`

const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
padding: 2rem;
`

const initialState = {
    name: ''
}

function CustomInput() {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleSubmit = e => {
        e.preventDefault()
        for(let key in state) {
            if(state[key] === '') {
                setError('Something went wrong.')
                setSuccess(false);
            } else {
                setError('')
                setState(prev => ({...prev, [key]: ''}))
                setSuccess(true);
            }
        }
    }
    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({...prev, [inputName]: value}))
    }
    return (
        <AppWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="name">Input field label</label>
                <StyledInput

                    style={{ border: error ? '1px solid #FF6155' : '1px solid #E5E7EB'}}
                    className={error && 'error-border'}
                    disabled={success ? true : false}
                    type="text"
                    name="name"
                    placeholder="Placeholder"
                    value={state.name}
                    onChange={handleInput}
                />
                {error && <StyledError>{error}</StyledError>}
                <StyledButton
                    disabled={success ? true : false}
                    type="submit"
                    text="Submit"
                />
            </StyledForm>
        </AppWrapper>
    );
}

export default CustomInput;

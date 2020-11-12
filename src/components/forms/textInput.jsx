import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) =>{
    return (
        <TextField
            fullWidth = {true}
            label={props.label} 
            margin={"dense"}
            multiline={props.multiline}
            row={props.rows}
            valuse={props.valuse}
            type={props.type}
            onChange={props.onChange}
        />
    );
}

export default TextInput
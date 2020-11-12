import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => 
    createStyles({
        "button":{
            borderColor: '#ff0549',
            color: '#ffB549',
            fontWeight:600,
            marginBottom: '8px',
            "&:hover":{
                backgroundColor: '#FFB549',
                color: '#fff'
            }
        }
    })
);


const Answer = (props) => {
    // console.log(props.content)
    // console.log(props.nextId)
    const classes = useStyles();
    // console.log(classes.button)
    return(
        <Button className={classes.button} variant="contained" onClick={()=>props.select(props.content,props.nextId)}>
            {props.content}
        </Button>
    )
}

export default Answer
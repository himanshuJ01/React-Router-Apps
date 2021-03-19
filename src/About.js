import React from 'react';
import './App.css';
import { useHistory } from 'react-router';

export default function About () {
        const history = useHistory();
   
        return(
            <div>
                <h1>About....</h1>
                <button className="btn waves-effect waves-light" onClick={()=> history.goBack()}>Navigate to AboutUS
                </button>
            </div>
        )
    }

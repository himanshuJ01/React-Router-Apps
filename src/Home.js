import React from 'react';
import { useHistory } from 'react-router';
import './App.css';

const Home =() => {
    const history = useHistory()
        return(
            <div >
                <h1>Home....</h1>
                <button class="btn waves-effect waves-light" onClick={()=> history.push('/About')}>Navigate to AboutUS
                </button>
            </div>
        )
    }
 
    export default Home;
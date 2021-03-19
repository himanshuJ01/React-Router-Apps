import React from 'react';
import { useParams } from 'react-router';
import './App.css';

export default function Profile() {
    const {name} = useParams();
        return(
            <div>
                <h1>Profile name is {name}</h1>
                {/* enter name after (profile/..) */}
            </div>
        )
    }

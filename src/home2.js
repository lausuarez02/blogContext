import React from 'react';
import { AppContext } from './context/context';
import {useContext} from 'react';

const Home2 = () => {
    const state = useContext(AppContext)
    console.log(state.fet)
    return (
        <div>
            {state.fetching.map(data => {
                return(<div key={data.id}>{data.name}</div>)
            })}
        </div>
    );
};

export default Home2;
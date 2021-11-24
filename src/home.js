import React from 'react';
import { AppContext } from './context/context';
import {useContext, useEffect} from 'react';

const Home = () => {
    const state = useContext(AppContext)
    const handleFetch = async () => {
        try{
            const res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
            const data = await res.json();
            state.setFetching(data);
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <div>

        </div>
    );
};

export default Home;
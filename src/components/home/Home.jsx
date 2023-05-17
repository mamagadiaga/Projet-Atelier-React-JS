import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

const Home = () => {
    return (
        <div className='bg-danger text-white p-5'>
            <NavBar />
            <h1 className='mt-5 p-5'>BIENVENUE A LA PAGE HOME</h1>
        </div>
    );
};

export default Home;
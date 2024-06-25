import React from 'react';
import NewItem from './new-item';

const Page = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen h-fit bg-slate-700'>
            <NewItem />
        </div>
    );
};

export default Page;
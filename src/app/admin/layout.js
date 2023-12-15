import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import Link from 'next/link';
import React from 'react';

const layout = ({ children }) => {
    return (
        <PrivateRoute>
            <div className='flex  flex-col md:flex-row items-start    lg:gap-10  '>
                <div className=' w-full md:w-1/4 md:min-h-[98vh] px-2 md:mt-2 md:px-5 py-5  bg-black'>
                    <div className='flex flex-col text-white gap-3'>
                        <Link href="/admin" className='btn btn-sm w-full bg-black hover:bg-white text-white hover:text-black border-white hover:border-black' > Your Email</Link>
                        <Link href="/admin/inbox" className='btn btn-sm w-full bg-black hover:bg-white text-white hover:text-black border-white hover:border-black' > You Replayed</Link>
                    </div>
                </div>
                <div className='w-full md:w-3/4'>
                    {children}
                </div>
            </div>
        </PrivateRoute>

    );
};

export default layout;
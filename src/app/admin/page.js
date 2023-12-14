import UseMessage from '@/components/Hooks/UseMessage';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import Link from 'next/link';
import React from 'react';

const page = async () => {

    const messages = await UseMessage()
    return (
        <PrivateRoute>
            <div className=' container mx-auto mt-5 lg:mt-10'>
                <div className="flex gap-4 lg:gap-10 justify-center items-center my-2">
                    <div >
                        <h1 className=' text-xl lg:text-4xl font-bold'> Welcome</h1>
                    </div>
                    <div>
                        <h1 className='text-xl lg:text-4xl font-bold' >Your Total Message : {messages.length}</h1>
                    </div>
                </div>
                <div className='grid  grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10 my-2 '>
                    {
                        messages.slice().reverse().map((item, index) => <div key={item._id} className=" border-b-2 border-black w-full  ">
                            <div className="card-body">
                                <h2 className="card-title">{item.name} </h2>
                                <p>{item.email}</p>
                                <p>{item.message}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/admin/${item._id}`} className="btn btn-sm bg-black hover:bg-white border-white hover:border-black text-white hover:text-black">Replay</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </PrivateRoute>

    );
};

export default page;
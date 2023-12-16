import HandleDelete from '@/components/HandleDelete/HandleDelete';
import UseMessage from '@/components/Hooks/UseMessage';
import Link from 'next/link';
import React from 'react';

const page = async () => {

    let messages = await UseMessage();



    return (
        <div>
            <div className=' container mx-auto mt-5 lg:mt-10  overflow-x-hidden  overflow-scroll h-screen'>
                <div className="flex flex-col md:flex-row gap-4 lg:gap-10 justify-center items-center my-2">
                    <div >
                        <h1 className=' text-xl lg:text-4xl font-bold'> Welcome</h1>
                    </div>
                    <div>
                        <h1 className='text-xl lg:text-4xl font-bold' >Your Total Message : {messages.length}</h1>
                    </div>
                </div>
                <div className='grid  grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10 my-2 '>
                    {
                        messages.slice().reverse().map((item, index) => <div key={item._id} className="  border-b-2 border-black w-full  ">
                            <div className="card-body ">
                                <h2 className="card-title">{item.name} </h2>
                                <p>{item.email}</p>
                                <p>{item.message}</p>
                                <div className="card-actions justify-end">
                                    <HandleDelete item={item} ></HandleDelete>
                                    <Link href={`/admin/${item._id}`} className="btn btn-sm bg-black hover:bg-white border-white hover:border-black text-white hover:text-black">Replay</Link>
                                    {/* <HandleSelect item={item}></HandleSelect> */}
                                </div>

                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default page;
import HandleSelect from '@/components/HandleSelect/HandleSelect';
import UseReplay from '@/components/Hooks/UseReplay';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import Link from 'next/link';
import React from 'react';

const page = async () => {

    const messages = await UseReplay()
    return (
        <div>
            <div className=' container mx-auto mt-5 lg:mt-10'>
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
                        messages.slice().reverse().map((item, index) => <div key={item._id} className=" border-b-2 border-black w-full  ">
                            <div className="card-body">
                                <h2 className="card-title">{item.name} </h2>
                                <p> <span className='font-bold'> Name: </span> {item.submitEmail.name}</p>
                                <p> <span className='font-bold'> User: </span>{item.email}</p>
                                <p> <span className='font-bold'> MyEmail: </span>{item.myEmail}</p>
                                <p> <span className='font-bold'> Question: </span> {item.submitEmail.message}</p>
                                <p> <span className='font-bold'> Answer: </span> {item.message}</p>
                                <div className="card-actions  justify-end">
                                    {/* <Link href={`/admin/${item._id}`} className="btn btn-sm bg-black hover:bg-white border-white hover:border-black text-white hover:text-black">Replay</Link> */}
                                    {
                                        item.selectStatus==true ?<><button>Selected</button></>:<> <HandleSelect item={item}></HandleSelect></>
                                    }
                                   
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
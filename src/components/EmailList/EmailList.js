'use client'
import React, { useState } from 'react';
import HandleDelete from '../HandleDelete/HandleDelete';
import Link from 'next/link';

const EmailList = ({ messages }) => {

    const [emailMessage, setEmailMessage]=useState(messages);

    return (
        <div>
            <div className=' container mx-auto mt-5 lg:mt-10 '>
                <div className="flex flex-col md:flex-row gap-4 lg:gap-10 justify-center items-center my-2">
                    <div >
                        <h1 className=' text-xl lg:text-4xl font-bold'> Welcome</h1>
                    </div>
                    <div>
                        <h1 className='text-xl lg:text-4xl font-bold' >Your Total Message : {emailMessage.length}</h1>
                    </div>
                </div>
                <div className='grid  grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10 my-2 '>
                    {
                        emailMessage.slice().reverse().map((item, index) => <div key={item._id} className="  border-b-2 border-black w-full  ">
                            <div className="card-body ">
                                <h2 className="card-title">{item.name} </h2>
                                <p>{item.email}</p>
                                <p>{item.message}</p>
                                <div className="card-actions justify-end">
                                    <HandleDelete item={item} emailMessage={emailMessage} setEmailMessage={setEmailMessage} ></HandleDelete>
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

export default EmailList;
import HandleDelete from '@/components/HandleDelete/HandleDelete';
import UseMessage from '@/components/Hooks/UseMessage';
import Link from 'next/link';
import React from 'react';
import EmailList from '../../components/EmailList/EmailList';

const page = async () => {

    let messages = await UseMessage();



    return (
        <div className=' md:overflow-x-hidden   md:overflow-y-scroll md:h-screen'>
            <EmailList messages={messages} ></EmailList>
        </div>

    );
};

export default page;
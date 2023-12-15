import React from 'react';

const UseQuestion = async () => {
    const res = await fetch('https://asif-server-site.vercel.app/question', {
        next: {
            revalidate: 4
        }
    });
    const question = await res.json();
    return question;
};

export default UseQuestion;
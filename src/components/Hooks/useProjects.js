import React from 'react';

const useProjects = async () => {

    const res = await fetch('http://localhost:5000/projects');
    const posts = await res.json();
    
    // console.log(posts);

    return posts;
};

export default useProjects;
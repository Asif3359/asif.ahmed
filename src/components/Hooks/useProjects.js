
const useProjects = async () => {

    const res = await fetch('http://localhost:5000/projects');
    const posts = await res.json();


    return posts;
};

export default useProjects;
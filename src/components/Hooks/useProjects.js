
const useProjects = async () => {

    const res = await fetch('https://asif-server-site.vercel.app/projects');
    const posts = await res.json();


    return posts;
};

export default useProjects;
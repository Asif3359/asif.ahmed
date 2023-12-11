
const useProject = async ({id}) => {
    const res = await fetch(`https://asif-server-site.vercel.app/projects/${id}`);
    const project = await res.json();
    return project;
};

export default useProject;
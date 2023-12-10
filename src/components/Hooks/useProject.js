
const useProject = async ({id}) => {
    const res = await fetch(`http://localhost:5000/projects/${id}`);
    const project = await res.json();
    return project;
};

export default useProject;
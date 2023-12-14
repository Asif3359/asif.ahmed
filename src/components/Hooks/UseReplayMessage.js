
const UseReplayMessage = async (id ) => {
    // console.log(id);
    const res = await fetch(`http://localhost:5000/message/${id}`);
    const messageSubmit = await res.json();

    return await messageSubmit;
};
export default UseReplayMessage;
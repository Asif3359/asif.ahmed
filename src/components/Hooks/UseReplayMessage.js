
const UseReplayMessage = async (id) => {
    // console.log(id);
    const res = await fetch(`https://asif-server-site.vercel.app/message/${id}`);
    const messageSubmit = await res.json();

    return await messageSubmit;
};
export default UseReplayMessage;
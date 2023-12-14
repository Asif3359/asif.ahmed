const UseMessage = async () => {

    const res = await fetch('https://asif-server-site.vercel.app/message');
    const messages = await res.json();
    return messages;
};

export default UseMessage;
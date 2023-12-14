const UseMessage = async () => {

    const res = await fetch('https://asif-server-site.vercel.app/message');
    const posts = await res.json();


    return posts;
};

export default UseMessage;
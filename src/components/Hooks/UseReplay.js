const UseReplay = async () => {

    const res = await fetch('https://asif-server-site.vercel.app/replay', {
        cache: 'no-store'
    });
    const replay = await res.json();
    return replay;
};

export default UseReplay;
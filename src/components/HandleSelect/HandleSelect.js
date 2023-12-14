'use client'

const HandleSelect = ({ item }) => {

    const handleSelectHandle = async () => {
        const selectInfo = {
            email: item.email,
            name: item.name,
            message: item.message,
            emailID: item._id
        }

        const mongoResponse = await fetch('https://asif-server-site.vercel.app/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectInfo),
        });
        if (mongoResponse.ok) {
            alert("Post Successfully");
        }
        if (!mongoResponse.ok) {
            alert("Something Error ");
        }

    }

    return (
        <>
            <button onClick={handleSelectHandle} className='btn btn-sm bg-black hover:bg-white border-white hover:border-black text-white hover:text-black'>Select</button>
        </>
    );
};

export default HandleSelect;
'use client'

const HandleSelect = ({ item }) => {

    const handleSelectHandle = async () => {
        const selectInfo = {
            userName: item.submitEmail.name,
            userEmail: item.email,
            myEmail: item.myEmail,
            Question: item.submitEmail.message,
            AnsWer: item.message,
            selectId: item._id
        }

        const mongoResponse = await fetch('https://asif-server-site.vercel.app/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectInfo),
        });
        const mongoUpdate = await fetch(`https://asif-server-site.vercel.app/updateStatus/${item._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectInfo),
        });
        if (mongoUpdate.ok && mongoResponse.ok) {
            alert('Update and Post Successful');
        } else if (mongoUpdate.ok) {
            alert('Update Successful, but something went wrong with the post');
        } else if (mongoResponse.ok) {
            alert('Post Successful, but something went wrong with the update');
        } else {
            alert('Something went wrong with both the update and the post');
        }



    }

    return (
        <>
            <button onClick={handleSelectHandle} className='btn btn-sm bg-black hover:bg-white border-white hover:border-black text-white hover:text-black'>Select</button>
        </>
    );
};

export default HandleSelect;
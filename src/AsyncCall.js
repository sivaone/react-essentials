import React, {useState, useEffect} from "react";

// https://api.github.com/users/sivaone


function AsyncCall({username}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;
        setLoading(true);

        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [username])

    if (loading) return <h1>Loading ...</h1>
    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>
    }
    if (!data) return null;

    if (data) {
        return (
            <div>
                <h2>{data.name}</h2>
                <p>{data.location}</p>
                <img src={data.avatar_url} alt={"avatar"}/>
            </div>
        );
    } else {
        return (<div>No data available</div>);
    }

}

export default AsyncCall;
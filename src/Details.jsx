import { useState, useEffect } from 'react';

function Details({ userId }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
    }, [])


    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        setLoading(true)
        const fetchData = async () => {

            try {

                await new Promise(resolve => setTimeout(resolve, 1000));
                const response = await fetch('/details.json', { signal });
                if (!response.ok) {
                    throw new Error('Error loading user data');
                }
                const data = await response.json();
                setUserData(data.find(x => x.id == userId));
                setLoading(false);
            } catch (error) {
                if (error.name !== 'UserCancelled') {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort({ name: "UserCancelled" }); // Cancela a requisição em andamento
        };

    }, [userId])

    return (
        <div>
            <h3>User Details</h3>
            {userId ?
                loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <p>Name: {userData.name}</p>
                        <p>Xp: {userData?.details.experience}</p>
                        <p>Level: {userData?.details.level}</p>
                    </div>
                ) : <></>}
        </div>
    );
}

export default Details

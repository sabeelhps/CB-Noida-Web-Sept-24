import React, { useEffect, useState } from 'react'

const GithubProfile = () => {

    const [profile, setProfile] = useState(
        {
            avatarUrl: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
            username: 'Anonymous',
            followers: 0,
            following: 0
        }
    );

    const nameChangeHandler = () => {
        setProfile({ ...profile, username: 'Something else' });
    }
    
    // Syntax----------------------
    // useEffect(() => {
        
    //     return () => {
            // CleanUp Function
    //     }
    // },[dependencyArray])

    useEffect(() => {
        async function fetchProfile() {
            const res = await fetch('https://api.github.com/users/facebook');
            if (!res.ok) {
                throw new Error('something went wrong');
            }
            const data = await res.json();
            setProfile({
                avatarUrl: data.avatar_url,
                username: data.name,
                followers: data.followers,
                following: data.following
            })
        }
        fetchProfile();
    }, []);

    console.log('inside compenent');
    
    return (
        <figure>
            <img src={profile.avatarUrl} alt='github profile' />
            <figcaption>
                <h2 onClick={nameChangeHandler}>Name : { profile.username}</h2>
                <h3>Followers : { profile.followers }</h3>
                <h3>Followers : { profile.following }</h3>
            </figcaption>
      </figure>
    )
}

export default GithubProfile
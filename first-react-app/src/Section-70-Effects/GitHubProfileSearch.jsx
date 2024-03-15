import { useEffect, useState } from "react";
import GitHubProfileSearchForm from "./GitHubProfileSearchForm";
import axios from "axios";

const URL = "https://api.github.com/users";

export default function GitHubProfileSearch() {
    let [username, setUsername] = useState("mulicvedad");
    let [profile, setProfile] = useState({data:null, isLoading: true});

    useEffect(() => {
        async function fetchUser() {
            const user = await axios.get(`${URL}/${username}`);
            setProfile({data: user.data, isLoading: false});
        }
        fetchUser();
    }, [username])

    function search(username) {
        setProfile({data: null, isLoading: true});
        setUsername(username);
    }
    if(profile.isLoading) return <p>isLoading...</p>

    return (
        <div>
            <img src={profile.data.avatar_url} alt="" style={{width: "200px", height: "200px"}} />
            <GitHubProfileSearchForm search={search} />
        </div>
    )
}
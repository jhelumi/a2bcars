
"use client"
import { authClient } from "@/lib/auth-client"

const UserProfile = () => {
  const session =  authClient.useSession();

    const handleLogout = async() => {
        await authClient.signOut();
        
  };


    return (
        <div> <h1>Profile</h1>
        <button onClick={() => handleLogout()} >Logout</button>
        <pre className= "text-sm overflow-clip">
            {JSON.stringify(session, null, 2)}
        </pre>
        </div>
    )

}

export default UserProfile;
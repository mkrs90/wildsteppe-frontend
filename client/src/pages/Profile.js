import React from "react"
import { useGlobalState } from "../context/GlobalState";

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();
  console.log(state)

  return (
    <div>
      <h1>{state.currentUser.user_id}</h1>
      <h1>{`Hello!! ${state.currentUser?.user_id}`}</h1>
    </div>
  )
}

export default Profile;
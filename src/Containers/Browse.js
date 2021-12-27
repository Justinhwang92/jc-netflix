import React, { useState, useContext } from "react";
import { SelectProfileContainer } from "./Profiles";
// Context
import { FirebaseContext } from "../Context/Firebase";

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}

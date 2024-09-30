//Worked on w/Blake, Alexis, Bertha, Joy and Kristen

import { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null) //possibly delete this 

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
    console.log("here")
    console.log(result)
    console.log("there")
      setSuccessMessage(result.message);
      setUsername(result.data.username); //possibly delete this
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2> Authenticate! </h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p> {error} </p>}
      {username && <p> username: {username} </p>} 
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}


import { useEffect, useState } from "react"
import { findAllInRenderedTree } from "react-dom/test-utils"

export default function Content() {
  const [secrets, setSecrets] = useState()
  useEffect( () => {
    fetch('http://127.0.0.1:5000/secrets', {
      headers:{
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(setSecrets)
      .catch(findAllInRenderedTree)
  }, [] )

  return (
    <>
    <h1>Content</h1>
    {secrets
     ? <h2>{secrets.message}</h2>
     : <h2>Loading...</h2>
    }
    </>
    )
}


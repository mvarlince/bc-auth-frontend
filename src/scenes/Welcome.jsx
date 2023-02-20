import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <>
      <h1>Welcome</h1>
      <Link className='App-link' to='/login'>Login</Link>
      <Link className='App-link' to='/signup'>Sign Up</Link>
    </>
  )
}

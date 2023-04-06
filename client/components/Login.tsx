import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <>
      <h2 className="welcome-text">Please login</h2>
      <button onClick={() => loginWithRedirect()}>Login / Register</button>
    </>
  )
}

export default Login

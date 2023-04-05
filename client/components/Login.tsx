import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { logout, loginWithRedirect, user } = useAuth0()

  return (
    <>
      <h2 className="welcome-text">Please login</h2>
      <button onClick={() => loginWithRedirect()}>Login / Register</button>
    </>
  )
}

export default Login

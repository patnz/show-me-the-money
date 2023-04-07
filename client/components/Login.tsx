import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <>
      <h1 className="subtitle is-2">Welcome to $how Me The Money!</h1>
      <h2 className="title is-4">Register an account.</h2>

      <h2 className="subtitle is-6">
        Join the ten other people keeping track of how much their boring
        meetings cost!
      </h2>

      <button className="button is-medium" onClick={() => loginWithRedirect()}>
        Login / Register
      </button>
    </>
  )
}

export default Login

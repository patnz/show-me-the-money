import { ChangeEvent, FormEvent, useState } from 'react'

function GetSalary() {
  const [salary, setSalary] = useState(0)

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // dispatch
  }

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setSalary(Number(e.target.value))
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="input-salary">
        What is your hourly wage?
        <input
          id="input-salary"
          name="salary"
          value={salary}
          onChange={changeHandler}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default GetSalary

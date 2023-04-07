import { ChangeEvent, FormEvent, useState } from 'react'

function GetSalary() {
  const [salary, setSalary] = useState('')

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSalary('')
    alert('Thank you for entering your wage!')
    // dispatch
  }

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setSalary(e.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="input-salary">
        What is your hourly wage? $
        <input
          id="input-salary"
          name="salary"
          pattern="[0-9]+(\.[0-9]{1,2})?"
          value={salary}
          onChange={changeHandler}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default GetSalary

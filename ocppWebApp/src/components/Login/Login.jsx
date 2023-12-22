import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import updateAction from "./actions"
import React from "react"

export default function Login(props) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })
  // Submit your data into Redux store
  const onSubmit = (data) => props.updateAction(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <input type="submit" />
    </form>
  )
}


// Connect your component with redux
connect(
  ({ firstName, lastName }) => ({ firstName, lastName }),
  updateAction
)(YourForm)
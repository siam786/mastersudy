import React from "react";
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://fathomless-hollows-04747.herokuapp.com/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added Sucessfuly");
        reset();
      }
    });
  };
  return (
    <div className="py-5 add-service">
      <h2>Please add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="description"
        />
        <input type="number" {...register("Price")} placeholder="price" />
        <input type="file" {...register("image")} placeholder="image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;

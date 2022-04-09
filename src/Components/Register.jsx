import React from "react";
import { Login } from "./Login";

export const Register = () => {
    const [formDetails, setFormDetails] = React.useState(
        { 
            "name": "",
            "email": "",
            "password": "",
            "username": "",
            "mobile": "",
            "description": "" 
        }
    );

    const handleChange = (e) => {
       // console.log(e.target.value);
        const { name, value } = e.target;
       // console.log(name, value);
        setFormDetails({
            ...formDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(formDetails);
        fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: { "content-type": "application/json" }
        })
        .then((res) => res.json())
        .then((res) => console.log(res.message))
        .catch((err) => console.log(err));
    };

    // {
    //     "name": "MASAI School",
    //     "email": "hello@masai.com"
    //     "password": "secret",
    //     "username": "masai-school",
    //     "mobile": "9876543210",
    //     "description": "A Transformation in education!" 
    //   }
    const { name, email, password, username, mobile, description } = formDetails;
    return(
        <form onSubmit={handleSubmit}>
            <h1>Register Page</h1>
            <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            />
            <br />
            <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            />
            <br />
            <input
            name="password"
            type="text"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            />
            <br />
            <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            />
            <br />
            <input
            name="mobile"
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={handleChange}
            />
            <br />
            <input
            name="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleChange}
            />
            <br />
            <input
            type="submit"
            value="Register"
            />
            <br />
            <button
            onClick={<Login />}
            />
        </form>
    );
};
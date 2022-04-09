import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/Action";

const Login = () => {
  let LoginWrapper = styled.div`
    text-align: center;
    margin: 10px;
  `;
  let Input = styled.input`
    margin: 10px 10px;
    border-radius: 5px;
    padding: 8px;
    border: 1px solid #cecece;
  `;

  const [data, setData] = React.useState({
    username: "",
    password: "",
  });


  const dispatch = useDispatch();

  const [token, setToken] = useState("");
  console.log(token);
  let handleChange = (e) => {
    let { value, name } = e.target;

    setData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const redirect = useNavigate();
  function getRes() {
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        !res.error ? dispatch(login(res.token)) : alert("something is wrong");

        !res.error && redirect("/");
      });
  }

  return (
    <LoginWrapper>
      <Input
        name="username"
        type="text"
        value={data.username}
        placeholder="Username"
        onChange={handleChange}
      />
      <br />
      <Input
        name="password"
        type="password"
        value={data.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <br />
      <button secondary onClick={getRes}>
        Login
      </button>
    </LoginWrapper>
  );
};

export default Login;
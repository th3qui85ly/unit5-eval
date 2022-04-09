import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const styledLink = styled(Link)`
    color: "bisque",
    `;
    
export const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>            
            <Link to="/employees">Employees</Link>            
            <Link to="/login">Login</Link>            
            <Link to="/register">Register</Link>            
        </div>
    );
};
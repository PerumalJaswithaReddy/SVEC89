import React from 'react'
import '../Ind.css'
export default function Login() {
    return (
        <div class="box">
        <h1>Login for Space Tourism</h1>
        <label for="uname">User Name:</label>
        <input type="text" name="user" id="uname" placeholder="Enter user name" required>
        
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Enter password" required>
        
        <input type="submit" value="Login">
        
    )
}

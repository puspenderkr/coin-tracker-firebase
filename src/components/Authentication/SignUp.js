import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function SignUp() {
   const [email, setEmail] =  useState("");
   const [password, setPassword] =  useState("");
   const [confirmPassword, setConfirmPassword] =  useState("");

   const handleSubmit = ()=>{

   }

  return (
    <div>
        <Box 
        p={3}
        style={{ display: "flex", flexDirection: "column", gap: "20px"}}>

           <TextField 
           variant = "outlined"
           type="email"
           label="Enter Email"
           value={email}
           onChange={(e)=> setEmail(e.target.value)}
           fullwidth />

           <TextField 
           variant = "outlined"
           type="password"
           label="Enter Password"
           value={email}
           onChange={(e)=> setPassword(e.target.value)}
           fullwidth />

           <TextField 
           variant = "outlined"
           type="password"
           label="Confirm Password"
           value={confirmPassword}
           onChange={(e)=> setConfirmPassword(e.target.value)}
           fullwidth />

           <Button 
           variant="contained" size="large" style={{
          backgroundColor: "#EEBC1D"
      }} onClick={handleSubmit}>Sign Up
      </Button>

        </Box>
    </div>
  )
}

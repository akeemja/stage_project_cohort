import { React, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, TextField, Box, Stack } from '@mui/material'
import { StyledContainer, StyledPaper } from "./styles"

export default function Login({setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
    
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })

        const data = await res.json()

        if (res.ok) {
            setUser(data)
            navigate('/')
        } else {
            alert('login failed')
        }
    }
    
    return (
        <StyledContainer maxWidth="md">
            <Box component="form" onSubmit={submitHandler}>
                <StyledPaper elevation={3}>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <TextField label="username" variant="outlined" type="text" name="username" autoComplete="username" placeholder="Enter your user code" onChange={(e) => setUsername(e.target.value)} required/>
                        <TextField label="password" variant="outlined" type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required/>
                        <Button variant="outlined" color="custom2" type="submit" size="small">Login</Button>
                    </Stack>
                </StyledPaper>
            </Box>
        </StyledContainer>
    )
}
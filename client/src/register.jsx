import { useState } from "react"
import { useTheme, useMediaQuery, Button, TextField, Box, Stack } from '@mui/material'
import { StyledContainer, StyledTitle, StyledPaper } from "./styles"

export default function Register({setUser}) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [authPassword, setAuthPassword] = useState("")
    const passwordsMatch = password === authPassword
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

    const submitHandler = async (e) => {
        e.preventDefault()
        
        if (passwordsMatch) {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({firstName, lastName, username, password})
            })

            const data = await res.json()

            if (res.ok && data.message === 'registration complete') {
                setUser({userName: data.userName, userType: data.userType})
                alert(data.message)
            } else {
                alert(data.message)
            }
        }
        
    }
    
    return (
        <StyledContainer maxWidth="md">
            
            <Box component="form" onSubmit={submitHandler}>
                <StyledPaper elevation={3}>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <StyledTitle variant={isSmallScreen ? 'h6' : 'h5'} gutterBottom>Add a new user</StyledTitle>
                        <TextField label="First Name" variant="outlined" type="text" name="firstName" autoComplete="firstName" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} required/>
                        <TextField label="Last Name" variant="outlined" type="text" name="lastName" autoComplete="lastName" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} required/>
                        <TextField label="Username" variant="outlined" type="text" name="username" autoComplete="username" placeholder="Enter your user code" onChange={(e) => setUsername(e.target.value)} required/>
                        <TextField label="Password" variant="outlined" type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required/>
                        <TextField label="Confirm Password" variant="outlined" type="password" name="authPassword" placeholder="Re-enter your password" onChange={(e) => setAuthPassword(e.target.value)} required 
                            error={authPassword.length > 0 && !passwordsMatch} helperText={authPassword.length > 0 && !passwordsMatch ? "password does not match" : ""}/>
                        <Button variant="outlined" type="submit" size="small">Add User</Button>
                    </Stack>
                </StyledPaper>
            </Box>
        </StyledContainer>
    )
}
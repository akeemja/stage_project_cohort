import { useState } from "react"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { Button, AppBar, Toolbar, Stack, Menu , MenuItem , useMediaQuery, useTheme, Typography } from '@mui/material'
import { NavBox, NavTypography, NavButton } from "./styles"
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar({user, setUser}) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const logout = () => {
        setUser(null)
        navigate("/login")
        fetch("/api/logout")
    }

    return (
        <NavBox>
            <AppBar position="fixed" >
                <Toolbar>
                    {user ? (
                        <>
                            {!isMobile && (
                                <>
                                    <NavTypography variant="h6">Welcome {user.userType}, {user.userName}</NavTypography>
                                    <Stack direction="row" spacing={2}>
                                        <Button component={RouterLink} to="/" variant="contained" color="custom4"> Home </Button>

                                        {user.userType === 'admin' && (
                                            <>
                                                <Button component={RouterLink} to="/register" variant="contained" color="custom4" >Add User</Button>
                                                <Button component={RouterLink} to="/uploadExcel" variant="contained" color="custom4"> Upload </Button>
                                            </>
                                        )}

                                        <Button variant="contained" color="custom1" onClick={logout}> Logout </Button>
                                    </Stack>
                                </>
                            )}

                            {isMobile && (
                                <>
                                    <NavButton id="basic-button" variant="contained" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                                        <MenuIcon />
                                    </NavButton>
                                    <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} slotProps={{list: {'aria-labelledby': 'basic-button'}}}>
                                        <MenuItem onClick={handleClose} component={RouterLink} to="/home" variant="contained"> Home </MenuItem>
                                        {user.userType === 'admin' && (
                                            <MenuItem onClick={handleClose} component={RouterLink} to="/uploadExcel" variant="contained"> Upload </MenuItem>
                                        )}
                                    </Menu>
                                    <NavTypography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>Welcome {user.userType}, {user.userName}</NavTypography>
                                    <Button variant="contained" color="custom1" onClick={logout}> Logout </Button>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <NavTypography variant="h6">Welcome</NavTypography>
                            <Stack direction="row" spacing={2}>
                                <Typography variant="contained"  >Login</Typography>
                            </Stack>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </NavBox>
    )
}
import { Typography } from '@mui/material'
import { NotFoundContainer } from './styles'

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Typography variant="h2" component="h1" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
    </NotFoundContainer>
  )
}


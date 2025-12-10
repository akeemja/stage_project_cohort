import { useEffect } from 'react'
import { useTheme, TableHead, TableRow, TableCell, TableBody, TableContainer, useMediaQuery } from '@mui/material'
import { RecBox, RecPaper, RecTable, RecTitle } from './styles'
import {useNavigate} from "react-router-dom"

export default function Recommendations ({recommendations}) {
  const navigate = useNavigate()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  useEffect(() => {
    if (!recommendations || recommendations.length === 0) {
      navigate("/home")
    }
  }, [recommendations, navigate])

  if (!recommendations || recommendations.length === 0) {
    return null
  }

  return (
    <RecBox>
      <RecTitle variant={isSmallScreen ? "h6" : "h5"} gutterBottom>Cohorts</RecTitle>
        <RecPaper elevation={3}>
          <TableContainer sx={{ maxHeight: { xs: 400, sm: "none" } }}>
            <RecTable stickyHeader size={isSmallScreen ? "small" : "medium"}>
              <TableHead>
                <TableRow>
                  <TableCell>Program</TableCell>
                  <TableCell>Language</TableCell>
                  <TableCell>Campus</TableCell>
                  <TableCell>Theory</TableCell>
                  <TableCell>Stage</TableCell>
                  <TableCell>Days</TableCell>
                  <TableCell>Schedule</TableCell>
                  <TableCell>HrWk</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>Integration</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {recommendations.map((cohort, index) => (
                  <TableRow key={index}
                    sx={{
                      "&:nth-of-type(odd)": {
                        backgroundColor: theme.palette.action.hover
                      },
                      "&:hover": {
                        backgroundColor: theme.palette.action.selected
                      }
                    }}>
                    <TableCell>{cohort.programs}</TableCell>
                    <TableCell>{cohort.language}</TableCell>
                    <TableCell>{cohort.campus}</TableCell>
                    <TableCell>{cohort.theory}</TableCell>
                    <TableCell>{cohort.stage}</TableCell>
                    <TableCell>{cohort.days}</TableCell>
                    <TableCell>{cohort.schedule}</TableCell>
                    <TableCell>{cohort.hrwk}</TableCell>
                    <TableCell>{cohort.startDate}</TableCell>
                    <TableCell>{cohort.integration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </RecTable>
          </TableContainer>
        </RecPaper>
    </RecBox>
  )
}
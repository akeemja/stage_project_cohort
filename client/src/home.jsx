import { useEffect, useState } from "react"
import { Select, MenuItem, FormControl, InputLabel, useTheme, Stack, useMediaQuery } from '@mui/material'
import { HomeBox, HomePaper, HomeButton, StyledTitle, HomeContainer } from "./styles"
import {useNavigate} from "react-router-dom"

export default function Home({setRecommendations}) {

  const navigate = useNavigate()
  const [program, setProgram] = useState([])
  const [programs, setPrograms] = useState([])
  const [campus, setCampus] = useState([])
  const [campuses, setCampuses] = useState([])
  const [day, setDay] = useState([])
  const [days, setDays] = useState([])
  const [language, setLanguage] = useState('')
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/api/getPrograms')
        const data = await response.json()
        setPrograms(data)
      } catch (error) {
        console.error('Failed to fetch classes:', error)
      }
    }
    fetchPrograms()
  }, [])

  useEffect(() => {
    const fetchCampus = async () => {
      if (!program || !language) return

      try {
        const response = await fetch('/api/getCampus', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ program, language })
        })

        const data = await response.json()
        setCampuses(data)
      } catch (error) {
        console.error('Failed to fetch campus:', error)
      }
    }
    fetchCampus()
  }, [program, language])

  useEffect(() => {
    const fetchDays = async () => {
      if (!program || !language || !campus) return
      
      try {
        const response = await fetch('/api/getDay', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ program, language, campus })
        })

        const data = await response.json()
        setDays(data)
      } catch (error) {
        console.error('Failed to fetch campus:', error)
      }
    }
    fetchDays()
  }, [program, language, campus])

  const submitHandler = async (e) => {
    e.preventDefault()

    const res = await fetch("/api/recommendations", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({program, language, campus, day})
    })

    const data = await res.json()

    if (res.ok) {
      setRecommendations(data)
      navigate('/recommendations')
    }
  }

  return (
    <HomeContainer>
    <HomeBox component="form" onSubmit={submitHandler}>
      <HomePaper elevation={3}>
        <Stack direction="column" spacing={3} width="100%">
              <StyledTitle variant={isSmallScreen ? 'h6' : 'h5'} gutterBottom>Search Cohort</StyledTitle>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Program</InputLabel>
            <Select value={program} onChange={(e) => setProgram(e.target.value)} >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {programs.map((prs, index) => (
                  <MenuItem key={index} value={prs.program}>
                    {prs.program}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <FormControl variant="standard" fullWidth>
            <InputLabel>Language</InputLabel>
            <Select value={language} onChange={(e) => setLanguage(e.target.value)} >
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="English">English</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="standard" fullWidth>
            <InputLabel>Campus</InputLabel>
            <Select value={campus} onChange={(e) => setCampus(e.target.value)} >
              {campuses.length === 0 ? (
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
              ) : (
                campuses.map((prs, index) => (
                  <MenuItem key={index} value={prs.campus}>
                    {prs.campus}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>

          <FormControl variant="standard" fullWidth>
            <InputLabel>Days</InputLabel>
            <Select value={day} onChange={(e) => setDay(e.target.value)} >
              {days.length === 0 ? (
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
              ) : (
                days.map((prs, index) => (
                  <MenuItem key={index} value={prs.days}>
                    {prs.days}
                  </MenuItem>)
              ))}
            </Select>
          </FormControl>

          <HomeButton variant="contained" type="submit" size={isSmallScreen ? "medium" : "large"}>submit</HomeButton>
        </Stack>
      </HomePaper>
    </HomeBox>
    </HomeContainer>
  )
}
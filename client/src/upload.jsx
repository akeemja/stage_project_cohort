
import { useState } from 'react'
import ExcelJS from 'exceljs'
import { useTheme, TableHead, TableRow, TableCell, TableBody, useMediaQuery, Box } from '@mui/material'
import { StyledContainer, StyledTitle, StyledPaper, UploadInput, UploadButton, UploadTablePaper, UploadTableContainer, UploadTable } from "./styles"

export default function Upload () {
  const [parsedRows, setParsedRows] = useState([])
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = async (event) => {
      const buffer = event.target.result
      const workbook = new ExcelJS.Workbook()
      await workbook.xlsx.load(buffer)

      const worksheet = workbook.worksheets[0]
      const rows = []

      const headerRow = worksheet.getRow(1)
      const headers = headerRow.values.slice(1)

      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return

        const rowData = {}
        row.values.slice(1).forEach((cell, index) => {
          const key = headers[index]
          rowData[key] = cell
        })

        rows.push(rowData)
      })

      setParsedRows(rows)
    }

    reader.readAsArrayBuffer(file)
  }

  const sendToBackend = async () => {
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedRows)
      })

      const result = await response.json()
      alert(result.message)
    } catch (err) {
      alert('Failed to upload data')
      console.error(err)
    }
  }

  return (
    <StyledContainer maxWidth="md">
      <Box>
        <StyledPaper elevation={3}>
          <StyledTitle variant={isSmallScreen ? 'h6' : 'h5'} gutterBottom>Upload excel</StyledTitle>
          <UploadInput type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
          <UploadButton variant="contained" onClick={sendToBackend}>Upload</UploadButton>
        </StyledPaper>
      </Box>
      {parsedRows.length > 0 && (
          <UploadTablePaper elevation={3}>
            <UploadTableContainer>
              <UploadTable size={isSmallScreen ? 'small' : 'medium'}>
                <TableHead>
                  <TableRow>
                    {Object.keys(parsedRows[0]).map((key) => (
                      <TableCell key={key}><strong>{key}</strong></TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                
                <TableBody>
                  {parsedRows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {Object.values(row).map((val, cellIndex) => (
                        <TableCell key={cellIndex}>{val?.toString()}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </UploadTable>
            </UploadTableContainer>
          </UploadTablePaper>
        )}
    </StyledContainer>
  )
}




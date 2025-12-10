import { styled, createTheme } from "@mui/material/styles";
import { Container, Typography, Paper, Button, Table, TableContainer, Box } from "@mui/material"

export let theme = createTheme({
  palette: {
    tonalOffset: 0.5,
    contrastThreshold: 4.5
  }
});

theme = createTheme(theme, {
  palette: {
    custom1: theme.palette.augmentColor({
      color: {
        main: "#e22121ff"
      },
      name: "custom1"
    }),
    custom2: theme.palette.augmentColor({
      color: {
        main: "#09cd2dff"
      },
      name: "custom2"
    }),
    custom3: theme.palette.augmentColor({
      color: {
        main: "#d28a2ce2"
      },
      name: "custom3"
    }),
    custom4: theme.palette.augmentColor({
      color: {
        main: "#ffffffff"
      },
      name: "custom4"
    })
  }
});

// style for all
export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: '64px',
  paddingBottom: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh'
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: theme.spacing(3)
}))

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2)
  }
}))

// style for Main
export const MainBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url('/planning-management.jpg')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  minWidth: "100vw",
  padding: theme.spacing(1, 2, 3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2)
  }
}))

export const MainContainer = styled(Container)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2, 3, 4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2, 3)
  }
}))

// style for navbar
export const NavBox = styled(Box)(({ theme }) => ({
  flexGrow: 1
}))

export const NavButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  minWidth: '40px',
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}))

export const NavTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center'
}))

// style for Home page
export const HomeContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4, 2)
}))

export const HomeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.default
}))

export const HomePaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
  padding: theme.spacing(2, 3, 4),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[4]
}))

export const HomeButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontWeight: 600,
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark
  }
}))

// style for Upload page
export const UploadInput = styled('input')(({ theme }) => ({
  padding: theme.spacing(2),
  width: '100%',
  maxWidth: 400,
  textAlign: 'center',
  fontSize: '0.9rem',
  '&::-webkit-file-upload-button': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: 4,
    cursor: 'pointer'
  }
}))

export const UploadButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  width: 'auto',
  textTransform: 'none',
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

export const UploadTablePaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: '100%',
  overflow: 'hidden'
}))

export const UploadTableContainer = styled(TableContainer)(({ theme }) => ({
  overflowX: 'auto'
}))

export const UploadTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
  '& th': {
    backgroundColor: theme.palette.grey[200],
    fontWeight: 600,
    whiteSpace: 'nowrap',
    fontSize: '0.875rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem'
    }
  },
  '& td': {
    whiteSpace: 'nowrap',
    fontSize: '0.875rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem'
    }
  }
}))

// style for Recommendations page
export const RecBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2, 3),
  width: "100%",
  maxWidth: "100vw",
  overflowX: "auto",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2)
  }
}))

export const RecTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 600
}))

export const RecPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  overflow: "hidden"
}))

export const RecTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
  "& th": {
    backgroundColor: theme.palette.grey[200],
    fontWeight: 600,
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem"
    }
  },
  "& td": {
    fontSize: "0.95rem",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem"
    }
  }
}))

// not found page
export const NotFoundContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default
}))


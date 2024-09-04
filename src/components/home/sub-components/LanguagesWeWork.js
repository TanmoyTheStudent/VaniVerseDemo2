import { Paper,Typography } from "@mui/material"
import Languages from "./Lanuages"
import LanguagesNext from "./LanguagesNext"

const design={
    padding: 2,
    textAlign: 'center',
    position: 'relative',
    margin: 2,
    //marginLeft:5,
    //marginRigt:5,
    backgroundColor: '#f3f1ee',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    '&::after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '3px',
      backgroundColor: '#008080',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  }

function LanguagesWeWork() {
  return (
    <div>
            <div 
              style={{
                marginBottom:"50px",marginTop:"8%"
              }}
            >
        <Paper 
      elevation={5} 
      sx={design}
    >
      <Typography variant="h4" style={{fontFamily:"Georgia",wordSpacing: '0.2em'}}>
        LANGUAGES WE WORK
      </Typography>
    </Paper>
    </div>
    <Languages/>
    <LanguagesNext/>

    </div>
  )
}

export default LanguagesWeWork
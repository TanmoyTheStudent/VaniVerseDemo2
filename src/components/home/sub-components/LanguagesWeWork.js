import { Paper,Typography,Container } from "@mui/material"
import Languages from "./Lanuages"
import LanguagesNext from "./LanguagesNext"
import { design } from "../../../required-data/object-data/servicesInHome"


function LanguagesWeWork() {
  return (
    <div>
     
        <Paper 
          elevation={5} 
          sx={{...design,marginTop:{xs:"100px",md:"8%"},marginBottom:"50px"}}
        >
          <Typography variant="h4" style={{fontFamily:"Georgia",wordSpacing: '0.2em'}}>
                LANGUAGES WE WORK
          </Typography>
        </Paper>
    
        <Languages/>
        <LanguagesNext/>

    </div>
  )
}

export default LanguagesWeWork

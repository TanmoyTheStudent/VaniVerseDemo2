import { Typography } from '@mui/material';

function CDA2() {
  return (

<div style={{margin:"20px",marginBottom:"50px"}}>
        

<Typography
sx={{
  fontSize: {
    xs: '1.25rem',
    sm: '1.3rem',
    md: '1.35rem',
    lg: '1.4rem',
    xl: '1.5rem',
  },
  textAlign: "justify",
 // lineHeight: '2',
  fontFamily:"unset",
  wordSpacing: "2px",
  color:"white",
//   marginTop: "80px",
//   marginBottom: "80px",
  '@media (max-width: 450px)': {
textAlign:"left"
}
}}
>

  <b>• Understanding Your Requirements :</b> We initiate the custom data curation process by understanding your specific data needs and objectives, determining the type of data required, the desired outcomes, and how the curated data will be utilized in your organization.<br/><br/>
  <b>• Data Identification and Collection :</b> Our team identifies and selects the most relevant data sources that align with your project goals. This can include databases, APIs, research articles, and other data repositories.<br/><br/>
  <b>• Data Gathering :</b> We gather the necessary data, ensuring it is comprehensive and relevant to your requirements. This may involve extracting data from multiple sources to create a rich dataset.<br/><br/>
  <b>• Data Cleaning and Quality Assurance :</b> The collected data is meticulously cleaned to eliminate inconsistencies, duplicates, and errors. This process ensures that the data is accurate and ready for analysis.<br/><br/>
  <b>• Quality Checks :</b> We implement rigorous quality control measures to verify the integrity and reliability of the data. This includes validating data entries and ensuring compliance with any relevant standards.<br/><br/>
  <b>• Custom Annotation :</b> Depending on your project needs, we provide tailored data annotation services. This may involve labeling data points, categorizing information, or adding metadata to enhance the dataset's usability.<br/><br/>
  <b>• Structuring the Data :</b> The curated data is then structured in a way that makes it easily accessible and searchable. This involves organizing the data into a coherent format that aligns with your analytical requirements.<br/><br/>
  <b>• Data Integration and Transformation :</b> If your project involves multiple datasets, we ensure they are seamlessly integrated to provide a unified view. This step is essential for enabling comprehensive analysis.

</Typography>

</div>
  )
}

export default CDA2

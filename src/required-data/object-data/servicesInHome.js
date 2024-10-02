import Image1 from "../assests/image/audioRecording.jpeg"
import Image2 from "../assests/image/stt.jpeg"
import Image3 from "../assests/image/ttt.jpeg"
import Image4 from "../assests/image/dataCuration.jpeg"



export const servicesInHomePage=[
    {
        id:1,
        title:"Transcription",
        description:"Transcription of audio by people native to the language into accurate, readable text.",
        image:Image2,
        link:"/our-services/transcription"
    },
    {
        id:2,
        title:"Audio Recording",
        description:"Read Speech recording,or extempore audio recording by the native people based on the requirements of language, dialect, gender, age of the speaker, expressive story reading, and the recording environment of the audio.",
        image:Image1,
        link:"/our-services/audio-recording"
    },
    {
        id:3,
        title:"Translation",
        description:"Comprehensive text curation and enhancing and translating text with the help of language experts for various applications.",
        image: Image3,
        link:"/our-services/translation"
    },
    {
        id:4,
        title:"Custom Data Curation",
        description:" We meticulously curate custom datasets in both audio and text to ensure accuracy and relevance for your AI models",
        image: Image4,
        link:"/our-services/custom-data-curation"
    }
]


export const associatedServices=[
    {
        title:"Audio Segmentation",
        description:"Dividing audio into meaningful segments for analysis."
    },
    {
        title:"Image Annotations",
        description:"Detailed image data annotations."
    },
    {
        title:"Audio Verification",
        description:"Ensuring integrity and authenticity of audio data."
    },
    {
        title:"NLP Annotations",
        description:"Data Curation for NLPs project requirements."
    }
]

export const word1 = [
    { text: "Assamese", color: "navy" },
    { text: "বাংলা", color: "black" },
    { text: "Boro", color: "gray" },
    { text: "English", color: "#0c76e3" },
    { text: "हिन्दी", color: "black" },
    { text: "Kannada", color: "navy" },
    { text: "ক ক্ত্যেন খসি", color: "gray" },
    { text: "Kokborok", color: "#0c76e3" },
    { text: "मगही", color: "black" },
    { text: "Maithili", color: "navy" },
];

export const word2 = [
    { text: "অসমীয়া", color: "#0c76e3" },
    { text: "Bengali", color: "gray" },
    { text: "बरʼ", color: "black" },
    { text: "English", color: "navy" },
    { text: "Hindi", color: "black" },
    { text: "ಕನ್ನಡ", color: "#0c76e3" },
    { text: "Khasi", color: "gray" },
    { text: "ককবরক", color: "navy" },
    { text: "Magahi", color: "black" },
    { text: "मैथिली", color: "#0c76e3" }
];


export const word3 = [
    { text: "മലയാളം", color: "#0c76e3" },
    { text: "Marathi", color: "gray" },
    { text: "नेपाली", color: "black" },
    { text: "Odia", color: "navy" },
    { text: "राजस्थानी", color: "black" },
    { text: "Sanskrit", color: "#0c76e3" },
    { text: "ᱥᱟᱱᱛᱟᱲᱤ", color: "gray" },
    { text: "Tamil", color: "navy" },
    { text: "తెలుగు", color: "black" },
    { text: "Urdu", color: "#0c76e3" }
];

export const word4 = [
    { text: "Malayalam", color: "navy" },
    { text: "मराठी", color: "black" },
    { text: "Nepali", color: "gray" },
    { text: "ଓଡ଼ିଆ", color: "#0c76e3" },
    { text: "Rajasthani", color: "black" },
    { text: "संस्कृत", color: "navy" },
    { text: "Santali", color: "gray" },
    { text: "தமிழ்", color: "#0c76e3" },
    { text: "Telugu", color: "black" },
    { text: "اردو", color: "navy" },
];

export const button=[
    {
      name:"Explore More",
      link:"/our-services"
    },
    {
       name:"Contact Us",
      link:"/contact-us"
    },
    {
      name:"Message Us",
      link:"/message-us"
    },
    {
      name:"Register With Us",
      link:"/register-yourself"
    }
  ]


 export const design={
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


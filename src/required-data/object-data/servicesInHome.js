import Image1 from "../assests/image/earn 3.jpeg"
import Image2 from "../assests/image/stt.jpeg"
import Image3 from "../assests/image/ttt.jpeg"
import Image4 from "../assests/image/data-curation.jpeg"



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


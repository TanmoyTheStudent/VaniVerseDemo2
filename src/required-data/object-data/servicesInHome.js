import Image1 from "../assests/image/earn 3.jpeg"
import Image2 from "../assests/image/stt.jpeg"
import Image3 from "../assests/image/ttt.jpeg"
import Image4 from "../assests/image/data-curation.jpeg"



export const servicesInHomePage=[
    {
        id:1,
        title:"Transcription",
        description:"We have collected a large amount of audio data of native people spoken in various Indian languages and dialects. Then we transcript the audio into accurate, readable text, and prepare a dataset that is essential for NLP.",
        image:Image2,
        link:"/our-services/transcription"
    },
    {
        id:2,
        title:"Studio/Conversational Audio Recording",
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
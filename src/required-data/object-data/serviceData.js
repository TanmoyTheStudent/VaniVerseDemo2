import Service1 from "../assests/image/stt.jpeg"
import Service2 from "../assests/image/earn 3.jpeg"
import Service3 from "../assests/image/ttt.jpeg"


export const servicesData=[
    {
        id:1,
        title:(
            <>
                <span>Transcription</span>
            </>
        ),
        description:"Transcription of audio into accurate, readable text. ",
        image: Service1,
        link:"/our-services/transcription"
    },
    {
        id:2,
        title:(
            <>
                <span>Studio/</span>
                <br />
                <span>Conversational</span>
                <br />
                <span>Audio Recording</span>
            </>
        ),
        description:"Audio recording of the written text based on the requirements of language, dialect, gender, age of the speaker and the recording environment of the audio.",
        image:Service2,
        link:"/our-services/audio-recording"
    },
    {
        id:3,
        title:(
            <>
                <span>Translation</span>
                
            </>
        ),
        description:"Comprehensive text curation and enhancing and translating text for various applications.",
        image:Service3,
        link:"/our-services/translation"
    },
    {
        id:4,
        title:(
            <>
                <span>Custom</span>
                <br />
                <span> Data Curation</span>
                
            </>
        ),
        description:"Comprehensive text curation and enhancing and translating text for various applications.",
        image:Service3,
        link:"/our-services/custom-data-curation"
    },
    {
        id:5,
        title:(
            <>
                <span>Other </span>
                <br />
                <span>Associated Services</span>
                
            </>
        ),
        description:"Comprehensive text curation and enhancing and translating text for various applications.",
        image:Service3,
        link:"/our-services/others"
    }
]
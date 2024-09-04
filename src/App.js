import { Route,Routes,useNavigate } from "react-router-dom";

//importing components

import HeaderResposive from "./components/header-footer/HeaderResposive";
import Footer from "./components/header-footer/Footer";
import Home from "./components/home/Home";
import Services from "./components/home/Services";
import Participate from "./components/home/Participate";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import Login from "./components/user-authentication/Login";
import Registration from "./components/user-authentication/Registration";
import Transcription from "./components/services/Transcription";
import Translation from "./components/services/Translation";
import CustomDataCuration from "./components/services/CustomDataCuration";
import AudioRecording from "./components/services/AudioRecording";
import AssociatedServices from "./components/services/AssociatedServices";
import TermsOfUse from "./components/header-footer/TermsOfUse";
import PrivacyPolicy from "./components/header-footer/PrivacyPolicy";
import MessageForm from "./components/home/MessageForm";
import ProvidingPlatform from "./components/services/ProvidingPlatform";

function App() {
  return (
    <div >

      <HeaderResposive/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<Services/>} />
        <Route path="/our-services/transcription" element={<Transcription/>}/>
        <Route path="/our-services/audio-recording" element={<AudioRecording/>}/>
        <Route path="/our-services/translation" element={<Translation/>}/>
        <Route path="/our-services/custom-data-curation" element={<CustomDataCuration/>}/>
        <Route path="/our-services/custom-data-curation" element={<CustomDataCuration/>}/>
        <Route path="/our-services/others" element={<AssociatedServices/>}/>
        <Route path="/our-services/providing-platform" element={<ProvidingPlatform/>}/>
        <Route path="/participate&earn" element={<Participate/>} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register-yourself" element={<Registration/>}/>
        <Route path="/terms-of-use" element={<TermsOfUse/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/message-us" element={<MessageForm/>}/>
        
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;

import { SocialMidias } from './components/SocialMidias';
import Logo from './images/profile/logo.jpg';
import TypeWriterEffect from 'react-typewriter-effect';

function App() {

  return (
    <div className="bg-[url('./images/bg.jpg')] bg-cover h-screen">
    <div className="bg-slate-900/70 h-screen grid justify-items-center content-center">

      <img src={Logo} alt="Logo" className='mt-10 rounded-full border-solid border-4 border-white-200 m-8'/>
      <h1 className="text-white text-center text-6xl font-mono mt-8 mb-4 ">John Marques</h1>


      <TypeWriterEffect
        textStyle={{
          color: '#ffffff',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={0}
        cursorColor="#ffffff"
        multiText={[
          'Desenvolvedor Full Stack ',
          
        ]}
        loop={true}
        nextTextDelay={2000}
        typeSpeed={80}
        backSpeed={50}
        autoStart={true}
      />


      <SocialMidias />
      </div>
    </div>
  )
}

export default App

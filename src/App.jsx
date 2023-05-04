import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const  App = () =>  {

  return (
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-patter bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
        <div className='relatize z-0'>
          
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

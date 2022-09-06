// import components
import Hero from '../components/Hero';
import About from '../components/About';
import How from '../components/How';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

// import data

const Home = () => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero />
      <About />
      <How />
      <Faq />
      <Testimonials />
      <Footer />
      <Copyright />
    </div>
  );
};

// get data.json
export default Home;

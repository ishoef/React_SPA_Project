import { Suspense } from 'react'
import './App.css'
import Auctions from './Components/Auctions'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import NavBar from './NavBar'
import { ToastContainer} from 'react-toastify';

const itemsPromis = fetch('./Items.json').then(res => res.json());

function App() {  
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Suspense fallback={<h1 className='text-center text-4xl mt-10 text-[#0E2954] font-semibold'>Loading Items...</h1>}>
        <Auctions itemsPromis={itemsPromis}></Auctions> 
      </Suspense>
      <Footer></Footer>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
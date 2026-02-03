import HeroSection from '@/components/herosection';
import Navbar from '@/components/components/navbar';

export default function Homepage() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <HeroSection />
      
    </div>
  )
}
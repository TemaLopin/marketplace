import { redirect } from 'next/navigation'
import Image from 'next/image'

const Home = () => {
  return redirect('/login')
}

export default Home

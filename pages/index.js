import { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

export default function Home() {

  const searchInputRef = useRef(null);
  const router = useRouter();


  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search/?q=${term}`);
  }

  return (
        <main className='h-screen flex flex-col items-center justify-center'>

          <Head>
            <title>Google - Search</title>
          </Head>
          
          <header className='flex justify-between p-3 text-gray-700 w-full'>
            <div className='flex space-x-4 items-center'>
              <a className='link'>About</a>
              <a className='link'>Store</a>
            </div>

            <div className='flex space-x-4 items-center'>
              <a className='link'>Gmail</a>
              <a className='link'>Images</a>
              <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 hover:scale-125 cursor-pointer'/>
              <Avatar 
                url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcb7kh_yHdrd-hXv1-bcwGtVku8QxLof-wPW9eBXnItrZyHCJ6i0t2vTil8_3SIUT7GA&usqp=CAU' 
                alt=''
                className='h-10 w-10 rounded-full hover:scale-110 hover:shadow-lg'
              />
            </div>
          </header>

          <form className='flex flex-col flex-1 items-center justify-center w-full'>
            <Image 
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCh11f4IpwBzmSlfogh82fev1-vfEsNq_ijaNn4mA8pnAr3nbcMqabUXLkfeTO_ejvgz0&usqp=CAU'
              width={230}
              height={100}
            />
            <div className="flex w-11/12 sm:max-w-xl items-center px-5 py-3 space-x-1 md:max-w-lg lg:max-w-xl rounded-full hover:shadow-md focus-within:shadow-md">
              <SearchIcon className='h-5 w-5 text-gray-500 ' />
              <input 
                ref={searchInputRef}
                type="text" 
                className='focus:outline-none flex-grow' />
              <MicrophoneIcon className='h-5 w-5 text-blue-600'/>
            </div>
            <div className='flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 w-1.5/5 mt-10 sm:space-x-4'>
              <button onClick={(e) => search(e)} className='btn'>Google Search</button>
              <button onClick={(e) => search(e)} className='btn'>I'm Feeling Lucky</button>
            </div>
          </form>

          <Footer />
        
        </main>
      )
}

import { DotsVerticalIcon, MapIcon, MicrophoneIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import HeaderOption from './HeaderOption'

const options = [
    [SearchIcon, 'All'],
    [PhotographIcon, 'Images'],
    [PlayIcon, 'Videos'],
    [NewspaperIcon, 'News'],
    [MapIcon, 'Maps'],
    [DotsVerticalIcon, 'More']    
]

const HeaderOptions = () => {
    let select
    // const [toggle, setToggle] = useState("")

    const handleClick = (titles) => {
        // setToggle(titles);
        // console.log(titles)
        select = titles
        console.log(select)
        // console.log(toggle)
    }
    
  return (
    <div className='flex items-center w-full text-gray-700 space-x-1 justify-evenly text-sm lg:text-base lg:space-x-36 lg:justify-start lg:ml-[140px]'>
        <div className="flex space-x-4">
            {options.map((option, index) => {
                return (         
                    <HeaderOption 
                        key={option[1]}
                        Icon={option[0]} 
                        title={option[1]}
                        handleClick={() => handleClick(option[1])}
                        selected={select}
                    />
                )
            })}

        </div>

        <div className="flex space-x-4">
            <p className="link">Settings</p>
            <p className="link">Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions
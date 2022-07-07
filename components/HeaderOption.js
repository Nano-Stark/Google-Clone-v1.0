import React, { useState } from 'react'

const HeaderOption = ({title, Icon, selected, handleClick}) => {
    // console.log(title, selected)
  return (
    <div className={`flex items-center space-x-1 text-sm p-2 border-b-4 border-transparent hover:text-blue-500 cursor-pointer pb-3 hover:border-blue-500 ${selected === title && 'border-green-500' }`} 
    onClick={handleClick}
    >
        <Icon className='h-5 sm:h-4'/>
        <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption
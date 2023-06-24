import React from 'react'

const Navbar = () => {
  return (
    <div>
<header>
<nav className=' flex-row-reverse flex   items-center bg-gray-800 h-14  '>
    <li className=' py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-green-400 transition duration-300 list-none m-2 '>Contact</li>
    <li className=' py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-green-400 transition duration-300 list-none m-2 '>About</li>
    <li className=' py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-green-400 transition duration-300 list-none m-2 '>Home</li>
    <a href="" className="py-2 px-2 font-medium text-white bg-blue-500-500 rounded hover:bg-yellow-500 transition duration-300">Search</a>
    <input className='mr-10' type="text" />
</nav>

</header>



    </div>
  )
}

export default Navbar
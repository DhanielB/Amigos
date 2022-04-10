import React, { useState } from 'react'

export default function App() {
  const [dark, setDark] = useState('')
  
  function toggleDark() {
    if(dark == '') {
      setDark('dark')
    }else{
      setDark('')
    }
  }

  return (
    <div className={dark}>
    <div className='
      flex
      h-screen
      w-screen
      bg-gray-400
      items-center
      font-extrabold
      justify-center
      tracking-tight
      dark:text-white
      dark:bg-gray-900
    '>
    <div className='
          absolute
          bg-yellow-500
          w-20
          left-30
          top-40
          h-10
        '/>
        <div className='
          absolute
          bg-green-500
          w-20
          left-10
          top-5
          h-20
        '/>
        <div className='
          absolute
          bg-lime-500
          w-5
          left-80
          top-80
          h-5
          rounded-full
        '/>
        <div className='
          absolute
          bg-red-500
          w-12
          left-10
          top-150
          h-8
          rounded
        '/>
    <div className='
      pl-10
      pr-10
      z-40
      sm:display-block
      sm:flex
    '>
      <button onclick='toggleDark()'>Trocar</button>
      <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLScR7o0rHme7MkATScMl4De9jR940jDX46F15ftHLgM9o2JDXg/formResponse'>
         <h1 className='
          mr-2
          text-white
          text-2xl
        '>Participe da Minha</h1>
        <h1 className='
          text-2xl
          text-pink-500
        '>lista de amigos</h1>

        <input className='
          pt-1
          pb-1
          pl-2
          w-40
          border
          dark:text-white
          border-gray-500
          rounded
          dark:bg-gray-600
          outline-none
        ' name='entry.411041762' placeholder='Digite seu nome' autocomplete={false} required/>
        <button className='
          ml-3
          pt-1
          pb-1
          pl-2
          pr-2
          bg-pink-500
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-pink-550
          focus:bg-pink-550
          text-white
          rounded
        '>Enviar</button>
      </form>
      </div>
    </div>
    </div>
  )
}

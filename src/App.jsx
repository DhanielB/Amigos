import React from 'react'

export default function App() {
  return (
    <div className='
      flex
      h-screen
      w-screen
      bg-gray-400
      items-center
      font-extrabold
      justify-center
      tracking-tight
      text-white
      dark:bg-gray-900
    '>
    <div className='
      pl-10
      pr-10
      sm:display-block
      sm:flex
    '>
      <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLScR7o0rHme7MkATScMl4De9jR940jDX46F15ftHLgM9o2JDXg/formResponse'>
        <h1 className='
          mr-2
          text-2xl
        '>Participe da Minha</h1>
        <div className='
          bg-yellow-500
          w-20
          l-30
          t-40
          h-10
        '/>
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
          text-black
          border-gray-500
          rounded
          dark:bg-gray-100
          outline-none
        ' name='entry.411041762' placeholder='Digite seu nome' required/>
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
          rounded
        '>Enviar</button>
      </form>
      </div>
    </div>
  )
}

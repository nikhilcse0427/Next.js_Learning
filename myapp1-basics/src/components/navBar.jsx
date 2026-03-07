import Link from 'next/link'

export const NavBar = ()=>{
  return(
    <>
      <nav className='z-20 font-bold text-[30px] pt-5 '>
        <ul className=" flex flex-row justify-center gap-5">
          <li className="hover:text-blue-500"><Link href='/'>Home</Link></li>
          <li className="hover:text-blue-500"><Link href='/brands'>Brands</Link></li>
          <li className="hover:text-blue-500"><Link href='/contacts'>Contacts</Link></li>
        </ul>
      </nav>
    </>
  )
}
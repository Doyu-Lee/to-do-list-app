import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="NavContainer mx-auto flex flex-wrap justify-around p-5 md:flex-row items-center">

      <nav className="mm:hidden md:m-auto flex flex-wrap items-center text-base justify-center navBar">
      <Link href="/" className="mr-5 hover:text-gray-900"> Home </Link>
      <Link href="/about" className="mr-5 hover:text-gray-900"> About </Link>
      <Link href="/overview" className="mr-5 hover:text-gray-900"> Overview </Link>

      {/* <Link href="/todolist" className="mr-5 hover:text-gray-900">To-do-list</Link> */}
      </nav>

        <Link href="/" className="flex title-font font-medium text-gray-900 my-auto mb-4 md:mb-0">
          <Image priority src="/logo0.png" width={200} height={50} alt="NEVERLAND logo" />
          {/* <span className="ml-3 text-xl">NEVERLAND</span> */}
        </Link>

        <nav className="md:m-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/accountbook" className="mr-5 hover:text-gray-900">Account-book</Link>
          <Link href="/todolist" className="mr-5 hover:text-gray-900">To-do-list</Link>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 
          focus:outline-none hover:bg-gray-200 rounded text-base my-auto ml-8 md:mt-0">
          입장
        </button>
        </nav>
        

      </div>
    </header>
  )
}

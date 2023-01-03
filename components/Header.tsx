import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <h1>CRUSHWAN</h1> 
      </div>

      <div>
        <Link href="/" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#20b46a] flex items-center rounded-full text-center">
          Sign up to the University of MERN
        </Link>
      </div>
    </div>
  )
}

export default Header;
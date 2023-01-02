import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link 
          href="/"
          className="text-[#20b46a] flex items-center"
        >
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#20b46a] mr-2"/>
          Go To Website
        </Link>
      </div>
      
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
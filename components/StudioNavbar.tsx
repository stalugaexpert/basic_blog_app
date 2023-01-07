import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { NavbarProps } from 'sanity'

function StudioNavbar(props: NavbarProps) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link
          className="text-[#F7AB0A] flex items-center"
          href="/"
        >
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
          Go to Website
        </Link>
      </div>
      <div>{props.renderDefault(props)}</div>
    </div>
  )
}

export default StudioNavbar

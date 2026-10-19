import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 px-6 py-5 backdrop-blur md:px-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          JONAS<span className="text-red-700">PHOTO</span>
        </Link>

        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-red-700 ${
                  isActive ? 'text-red-700' : 'text-gray-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
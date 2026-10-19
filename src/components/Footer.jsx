import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-950 px-6 py-10 text-white md:px-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">
            JONAS<span className="text-red-500">PHOTO</span>
          </h2>
          <p className="mt-3 max-w-md leading-7 text-gray-400">
            A company profile website concept celebrating photography
            and meaningful memories.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <div className="mt-3 flex flex-wrap gap-4 text-gray-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/gallery" className="hover:text-white">Gallery</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-5 text-sm text-gray-500">
        © 2026 Jonas Photo Company Profile · Academic Project
      </div>
    </footer>
  )
}

export default Footer
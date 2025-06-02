import { FaUserEdit } from 'react-icons/fa'
import { MdOutlineAddToHomeScreen, MdWork } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <nav className='flex items-center justify-center gap-[5%] p-5 bg-green-600 text-white shadow-lg'>
              <Link to="/" className='flex items-center gap-1'><MdOutlineAddToHomeScreen /> Home</Link>
              <Link to="/about" className='flex items-center gap-1'><FaUserEdit />About</Link>
              <Link to="/experience" className='flex items-center gap-1'><MdWork />Experience</Link>
              <Link to="/contact" className='flex items-center gap-1'><RiContactsFill />Contact</Link>
    </nav>
  )
}

export default Header
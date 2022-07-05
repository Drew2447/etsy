import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"

const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const renderNav = () => {
    if(user) {
      return (
        <>
          <Link to='/account'>
            <li>Account</li>
          </Link>
          <li onClick={logout}>Log Out</li>
          <Link to='/productsforsale'>
            Products For Sale
          </Link>
          <Link to='categories'>
            <li>Categories</li>
          </Link>
        </>
      )
    } else {
      return (
        <>
          <Link to='/login'>
            <li>Log In</li>
          </Link>
          <Link to='/register'>
            <li>Register</li>
          </Link>
        </>
      )
    }
  }

  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          {renderNav()}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
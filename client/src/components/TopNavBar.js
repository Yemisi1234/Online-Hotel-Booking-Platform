import {Link} from 'react-router-dom'

//we can return without using the return statement when we use brackets
const TopNavBar = () => (
  <div className = "nav-bar bg-light d-flex justify-content-between">
  <Link className = "nav-link" to = "/" >Home</Link>
  <Link className = "nav-link" to = "/login" >Login</Link>
  <Link className = "nav-link" to = "/signup" >SignUp</Link>
  </div>
)

export default TopNavBar

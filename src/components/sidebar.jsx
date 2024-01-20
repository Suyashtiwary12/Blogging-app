
function Sidebar({ currBar, setcurBar }) {
  return (
    <>

      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side-container" style={{ width: "280px" }}>
        
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

          <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Menu</span> 

        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={() => { setcurBar("Home") }}>
            <a href="#" className={`nav-link  text-white ${(currBar === "Home") ? `active` : null}`} aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              Home
            </a>
          </li>
          <li onClick={() => { setcurBar("Posts") }}>
            <a href="#" className={`nav-link text-white ${(currBar === "Posts") ? `active` : null}`}>
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
              Posts
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Sidebar;
const SideBar = () => {
    return (
        <div className="w-25 h-full bg-gray-800 text-white fixed">
        <nav className="mt-4">
          <ul>
            <li className="p-2 hover:bg-gray-700">
              <a href="#about">About</a>
            </li>
            <li className="p-2 hover:bg-gray-700">
              <a href="#projects">Projects</a>
            </li>
            <li className="p-2 hover:bg-gray-700">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
  
  export default SideBar
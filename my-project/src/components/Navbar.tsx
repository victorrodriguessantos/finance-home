function Navbar() {
  return (

<div className="fixed top-0 z-100 w-full bg-[#ddc6ed]">
    <nav className="flex justify-between items-center">
        <div id="menu-toggle" className="none pointer p-10"> &#9776; </div>
        <ul id="menu" className="flex list-none justify-center w-full gap-2 wrap p-10">
            <li className="flex items-center justify-center p-10 h-[50px] w-auto"><a href="#home">Home</a></li>
            <li className="flex items-center justify-center p-10 h-[50px] w-auto"><a href="#galeria">Galeria</a></li>
            <li className="flex items-center justify-center p-10 h-[50px] w-auto"><a href="#contato">Contato</a></li>
        </ul>
    </nav>
</div>
  )}
export default Navbar;

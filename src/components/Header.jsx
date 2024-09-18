import Logo from "../assets/svg/redberry.svg";

function Header() {
  return (
    <div className="shadow-[inset_0_0_0_1px_#DBDBDB]">
      <header className="page-width stroke-[#243c5a]">
        <img src={Logo} className="py-[38px]" alt="Redberry logo" />
      </header>
    </div>
  )
}

export default Header
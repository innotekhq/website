import WorkWithUs from "@/components/WorkWithUs";

const NavOption = ({ name }: {name :string}) => <div className="transition-all hover:bg-slate-700 hover:text-white p-4 rounded-md">{name}</div>;

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full mx-auto shadow-lg bg-white dark:bg-background">
      <div className="flex gap-96 items-center justify-center py-5 w-full mx-5">
        <div className="flex items-center">
          <a href='/'><div className="bg-cover bg-no-repeat bg-center w-16 h-16" style={{ backgroundImage: "url('/logo.png')" }}></div></a>
          <div className="pl-5 font-bold text-2xl">INNOTEK</div>
        </div>
        <div className="flex gap-5">
          <NavOption name='Services' />
          <NavOption name='Case Studies' />
          <NavOption name='Team' />
        </div>
        <div className=''>
          <WorkWithUs />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
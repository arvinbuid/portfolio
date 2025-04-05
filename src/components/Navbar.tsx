function Navbar() {
    return (
        <div className="w-[80px] fixed h-full top-0 left-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10">
            <a href="#">
                <span className="text-4xl text-red-400 font-semibold">A</span>.<span className="block w-min rotate-90 origin-bottom font-semibold text-sm">Buid</span>
            </a>
            <div className="flex flex-col gap-y-2 sm:gap-y-3">
                <a href="#" className="group flex flex-col items-center gap-y-2 ">
                    <span className="text-2xl text-yellow-600 group-hover:scale-125 transition-all">icon</span>
                    <span className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all text-center tracking-wide">name</span>
                </a>
            </div>
            <p className="relative flex flex-col justify-center items-center text-sm text-gray-500 gap-y-2">
                <span className="absolute left-1/2 origin-bottom-left w-max flex items-center -rotate-90">C 2025</span>
            </p>
        </div>
    )
}

export default Navbar

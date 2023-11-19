import React from 'react'

const Buttons = () => {
    return (
        <div>
            <button className=' custom-cursor m-10 rounded-xl'>
                <a className="rounded-[30px]  relative flex items-center border border-purple-500 bg-purple-500 group " href="{{ route('process.create') }}">
                    <span className="text-gray-200 font-semibold text-xl mx-14  my-4 transform group-hover:translate-x-0 transition-all duration-300">✨$7.5M seed raised with Accel & Square Peg</span>
                    <span className="absolute right-0 px-3 py-[19px]  rounded-r-[30px] bg-purple-500 flex items-center justify-center transform group-hover:translate-x-5  transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </span>
                </a>
            </button>
        </div>
    )
}

export default Buttons

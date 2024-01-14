'use client'

export default function Button({ message }) {
    return (
        <div className="flex justify-center select-none">
            <button onClick={() => window.location.href = "/prophecy"} className="bg-[lightseagreen] hover:bg-slate-500 text-white text-lg font-bold m-5 rounded-lg h-12 w-64 hover:text-[lightseagreen] active:italic">
                {message}
            </button>
        </div>
    )
}
function Button({text, onClick, type}) {

    const stylingAdded = {
        loginFunction: "bg-orange-400 text-white font-bold px-4 py-2 rounded-xl hover:bg-orange-600",
        explainCode: "bg-green-800 text-white font-bold px-4 py-2 rounded-xl hover:bg-green-600",
        dropDown: "w-full text-left px-4 py-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#2c2c2c]",
        dropDown_delete:"w-full text-left px-4 py-2 rounded-md text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-[#2c2c2c]"
    }

    return(
        <>
            <div>
                <button 
                    className={`${stylingAdded[type]} cursor-pointer transition duration-300 ease-in-out`}
                    onClick={onClick}
                >
                    {text}
                </button>
            </div>
        </>
    )
}

export default Button;
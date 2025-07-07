import Button from "../Atoms/Buttons";

function ConfirmationBox({msg, onSubmit, onCancel}) {
    return(
        <>
            <div className="fixed inset-0 z-100 bg-black/40 flex items-center justify-center w-auto flex">

                <div className="flex flex-col gap-2 bg-white dark:bg-[#3a3a3a] p-4 rounded-lg">
                    <div className="text-black dark:text-white text-md">
                        {msg}
                    </div>

                    <div className="flex gap-2">
                        <Button 
                            text={"No"} 
                            onClick={() => {onCancel()}} 
                            type={"explainCode"} 
                        />
                        <Button 
                            text={"Yes"} 
                            onClick={onSubmit} 
                            type={"explainCode"} 
                        />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default ConfirmationBox;
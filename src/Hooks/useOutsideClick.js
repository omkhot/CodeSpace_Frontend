import { useEffect } from "react";

function useOutSideClick(ref, callback, active = true){

    useEffect(()=>{

        if(!active) return;

        function handelClickOutSide(event){
            if(ref.current && !ref.current.contains(event.target)){
                callback();
            }
        }

        document.addEventListener("mousedown", handelClickOutSide);

        return () => {
            document.removeEventListener("mousedown", handelClickOutSide);
        };

    },[ref, callback, active]);

}

export default useOutSideClick;
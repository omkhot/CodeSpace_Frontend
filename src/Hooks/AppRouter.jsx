import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";

function AppRouter(){
    return(
        <>
            <Routes>

                <Route path="/" element={<HomePage />} />

            </Routes>
        </>
    )
}

export default AppRouter;
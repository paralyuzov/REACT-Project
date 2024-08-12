import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Spinner from "./Spinner";

export default function Loader({ children }) {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                <Spinner />
            </div>
        );
    }

    return <>{children}</>;
}
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentDecline() {

    const navigate = useNavigate();

    useEffect(() => {
        const time = setTimeout(() => {
            navigate('/')
        }, 5000)

        return () => clearTimeout(time);
    }, [navigate])

    return (
        <div className="flex flex-col justify-center items-center mt-20 text-3xl font-laila gap-10">
            <div>
                <i class="fa-solid fa-circle-xmark text-9xl text-red-400"></i>
            </div>
            <h2>Transaction Decline!</h2>
            <p>Unable to process payment request</p>
            <p className="text-xl">You will be redirected to home page...</p>
        </div>
    );
}
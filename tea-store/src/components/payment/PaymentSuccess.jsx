import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {

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
                <i className="fa-regular fa-circle-check text-9xl text-green-300"></i>
            </div>
            <h2>Transaction Successfull!</h2>
            <p>Your payment has been completed.</p>
            <p className="text-xl">You will be redirected to home page...</p>
        </div>
    );
}
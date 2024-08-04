export default function CartModal({ title, quantity, image, onClose }) {

    return (
        <div className="fixed  top-32 z-50 right-0 p-10 bg-slate-100 flex flex-col justify-center items-center  border-2 border-stone-300 rounded-3xl">
            <p className="flex gap-5 justify-center items-center text-xl"><i className="fa-solid fa-check"></i>Item added to your cart!</p>
            <div className="w-72">
                <img src={image} alt="" />
            </div>
            <span className="font-bold text-2xl">{title} x {quantity} </span>
            <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Close
            </button>
        </div>
    );

}
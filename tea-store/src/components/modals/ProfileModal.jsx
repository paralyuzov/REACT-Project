export default function ProfileModal({ title, message, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white flex flex-col justify-center items-center rounded-lg p-6 shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="py-2 px-4 bg-lime-200 hover:bg-lime-300 text-black font-semibold rounded-lg"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
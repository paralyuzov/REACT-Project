
export default function SuccessModal({ message, onClose }) {
    if (!message) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4 text-green-600">
                    Success
                </h2>
                <p className="text-green-600">
                    {message}
                </p>
                <button
                    onClick={onClose}
                    className="mt-6 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900 transition-all"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
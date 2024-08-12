export default function ErrorModal({ errors, onClose }) {

    if (!errors || Object.keys(errors).length === 0) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4">Validation Errors</h2>
                <ul className="list-decimal list-inside text-red-600">
                    {Object.values(errors).map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
                <button
                    onClick={onClose}
                    className="mt-6 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition-all"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
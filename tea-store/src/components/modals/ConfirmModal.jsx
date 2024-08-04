

export default function ConfirmModal({ title, message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white flex flex-col justify-center items-center rounded-lg p-6 shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="mb-6">{message}</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onCancel}
                        className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-black font-semibold rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="py-2 px-4 bg-blue-400 hover:bg-blue-500 text-black font-semibold rounded-lg"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
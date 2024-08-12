import { useEffect, useState } from "react";
import { useForm } from "../../../../hooks/useForm";
import Spinner from "../../../../shared/Spinner";
import requester from "../../../../api/requester";
import { useNavigate } from "react-router-dom";


export default function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await requester.get('http://localhost:3030/users');
                setUsers(data);
                setIsLoading(false);
            } catch (err) {
                console.log(err.message);
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleEditClick = (user) => {
        navigate(`/admin/users/edit/${user._id}`, { state: { ...user } });
    };


    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="container mx-auto p-6 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">User Table</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="border-b bg-gray-50 text-gray-700">
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Username</th>
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Telephone</th>
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">{user.username}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{user.tel}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{user.role}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    <button
                                        onClick={() => handleEditClick(user)}
                                        className="px-5 py-2 border rounded-full text-sm text-black hover:bg-blue-300 hover:ease-in-out duration-700"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    );
}
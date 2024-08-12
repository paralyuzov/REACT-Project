import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from '../../shared/Spinner';

export default function AdminGuard() {
    const { isAuthenticated, role } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/signin" />;
    }

    if (role !== 'admin') {
        return <Navigate to="/unauthorized" />;
    }



    return <Outlet />;
}
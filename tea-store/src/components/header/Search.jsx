import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const [isInputEmpty, setIsInputEmpty] = useState(false);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setIsInputEmpty(false);
    };

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search?q=${query}`);
            setQuery("")
        } else {
            setIsInputEmpty(true)
        }
    };

    return (
        <div className="flex items-center">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for teas..."
                className={`p-2 rounded ${isInputEmpty ? 'border-2 border-red-300' : 'border'}`}
            />
            <button onClick={handleSearch} className="ml-2 p-2 bg-slate-200 rounded">Search</button>
        </div>
    );
}
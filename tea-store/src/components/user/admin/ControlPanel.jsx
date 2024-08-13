import { Link } from "react-router-dom"

export default function ControlPanel() {

    return (
        <div>
            <div>
                <h2 className="text-5xl my-10 font-kreon">Control Panel</h2>
            </div>
            <div className="grid grid-cols-4 items-center gap-5  p-5 text-2xl font-kreon">
                <Link to={'/admin/teas'}>
                    <div className="flex flex-col justify-center items-center gap-5 border-2 rounded-3xl hover:scale-105">
                        <div>
                            <img className="w-40 h-40" src="\src\assets\admin-panel\add-tea.jpg" alt="" />
                        </div>
                        <p className="py-2">Teas</p>
                    </div>
                </Link>

                <Link to={'/admin/utensils'}>
                    <div className="flex flex-col justify-center items-center gap-5 border-2 rounded-3xl hover:scale-105">
                        <div >
                            <img className="w-40 h-40" src="\src\assets\admin-panel\add-utensils.jpg" alt="" />
                        </div>
                        <p className="py-2">Utensils</p>
                    </div>
                </Link>

                <Link to={'/admin/recipes'}>
                    <div className="flex flex-col justify-center items-center gap-5 border-2 rounded-3xl hover:scale-105">
                        <div>
                            <img className="w-40 h-40" src="\src\assets\admin-panel\add-recipe.avif" alt="" />
                        </div>
                        <p className="py-2">Recipes</p>
                    </div>
                </Link>

                <Link to={'/admin/users'}>
                    <div className="flex flex-col justify-center items-center gap-5 border-2 rounded-3xl hover:scale-105">
                        <div>
                            <img className="w-40 h-40" src="\src\assets\admin-panel\users.webp" alt="" />
                        </div>
                        <p className="py-2">Users</p>
                    </div>
                </Link>
            </div>



        </div>
    );


}
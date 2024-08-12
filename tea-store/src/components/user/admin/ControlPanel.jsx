import { Link } from "react-router-dom"

export default function ControlPanel() {

    return (
        <div>
            <div>
                <h2 className="text-5xl my-10">Control Panel</h2>
            </div>
            <div className="grid grid-cols-3 items-center gap-5  p-5 text-2xl font-kreon">
                <Link to={'/admin/teas'}>
                    <div className="flex flex-col justify-center items-center gap-5 border-2 rounded-full hover:scale-105 hover:bg-slate-50">
                        <div>
                            <img className="w-44 h-44" src="\src\assets\admin-panel\add-tea.jpg" alt="" />
                        </div>
                        <p className="py-2">Teas</p>
                    </div>
                </Link>

                <Link to={'/admin/utensils'}>
                    <div className="flex flex-col justify-center items-center gap-5 border-2 rounded-full hover:scale-105 hover:bg-slate-50 ">
                        <div >
                            <img className="w-44 h-44" src="\src\assets\admin-panel\add-utensils.jpg" alt="" />
                        </div>
                        <p className="py-2">Utensils</p>
                    </div>
                </Link>

                <Link to={'/admin/recipes'}>
                    <div className="flex flex-col justify-center items-center gap-5 border-2 rounded-full hover:scale-105  hover:bg-slate-50">
                        <div>
                            <img className="w-44 h-44" src="\src\assets\admin-panel\add-recipe.avif" alt="" />
                        </div>
                        <p className="py-2">Recipes</p>
                    </div>
                </Link>

                <div className="flex flex-col justify-center items-center gap-5 border-2 rounded-full hover:scale-105  hover:bg-slate-50">
                    <div>
                        <img className="w-44 h-44" src="\src\assets\admin-panel\users.webp" alt="" />
                    </div>
                    <p className="py-2">Users</p>
                </div>
            </div>



        </div>
    );


}
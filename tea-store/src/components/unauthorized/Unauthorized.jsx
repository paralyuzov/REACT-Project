
export default function Unauthorized() {

    return (
        <div>
            <div className="flex flex-col justify-center items-center my-20 gap-5">
                <div>
                    <img src="\src\assets\404.webp" alt="" />
                </div>
                <div className="w-1/4 text-xl flex flex-col gap-10">
                    <p className="font-bold">403 - Unauthorized</p>
                    <p>You do not have permission to view this page.</p>
                </div>
            </div>
        </div >
    );
}
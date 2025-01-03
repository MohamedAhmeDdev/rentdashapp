import routes from '../routes/sidebar';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../Images/image-removebg-preview.png';

function LeftSidebar() {
    const location = useLocation();

    const close = () => {
        document.getElementById('left-sidebar-drawer').click();
    };

    return (
        <div className="drawer-side z-30">
            <label className="drawer-overlay"></label>
            <ul className="px-0 w-80 bg-base-100 min-h-full text-base-content">
                <button
                    className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
                    onClick={() => close()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="mb-2 p-2 border-b flex items-center space-x-5 h-20 font-semibold text-xl">
                    <img className="w-16 h-16 rounded-lg" src={logo} alt="Logo" />
                    <p className="text-lg font-bold">RentDash</p>
                </div>

                <p className="pl-2 py-2 uppercase">Menu</p>

                {routes.map((route, k) => (
                    <li key={k}>
                        <NavLink
                            to={route.path}
                            className={({ isActive }) =>
                                isActive && location.pathname === route.path
                                    ? 'bg-green-100 pl-3 focus:outline-none py-2 flex space-x-2 items-center text-black text-md font-semibold'
                                    : 'bg-white pl-3 focus:outline-none py-2 flex space-x-2 items-center text-black text-md font-semibold'
                            }
                        >
                           <div
                                className={
                                    location.pathname === route.path
                                        ? 'text-green-800 shadow-lg p-1 rounded-md border border-green-500 bg-green-100'
                                        : 'text-gray-500 p-1 rounded-md border border-gray-300'
                                }
                            >
                                {route.icon}
                            </div>
                            <p>{route.name}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LeftSidebar;

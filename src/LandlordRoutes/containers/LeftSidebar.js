import routes from '../routes/sidebar'
import { NavLink,  Routes, Link , useLocation} from 'react-router-dom'
import logo  from '../../Images/image-removebg-preview.png'

function LeftSidebar(){
    const location = useLocation();




    const close = (e) => {
        document.getElementById('left-sidebar-drawer').click()
    }

    return(
        <div className="drawer-side  z-30  ">
            <label  className="drawer-overlay"></label> 
            <ul className=" px-0  w-80 bg-base-100 min-h-full   text-base-content">
            <button className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={() => close()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="h-6 w-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

                <div className="mb-2 p-2 border-b flex items-center space-x-5  h-20 font-semibold text-xl">
                   <img className="w-16  h-16 rounded-lg" src={logo} alt="Logo"/>
                   <p className='text-lg font-bold'>RentDash</p>
                 </div>

                 <p className='pl-2 py-2 uppercase'>Menu</p>

                 {routes.map((route, k) => (
                   
                    <li className="" key={k}>
                    <div end to={route.path}
                        className="bg-green-100 pl-3 focus:outline-none  py-2">
                        <div className='flex space-x-2 items-center '>
                        <div className="text-green-800 shadow-lg p-1 rounded-md border border-green-500 bg-green-100">
                            {route.icon}
                        </div>
                        <p className='text-black text-md font-semibold'>{route.name}</p>
                        </div>
                        {location.pathname === route.path && (
                            <span
                            className="absolute mt-1 mb-1 inset-y-0 left-0 w-1"
                            aria-hidden="true"
                            ></span>
                        )}
                    </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default LeftSidebar
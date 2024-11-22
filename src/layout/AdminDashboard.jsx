import AdminSidebar from '@/pages/component/AdminSidebar'
import { Outlet } from 'react-router-dom'


const AdminDashboard = () => {
  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <div className='sticky z-50 top-0 lg:h-screen lg:w-72'>
        <AdminSidebar />
      </div>

      <div className='flex-1 z-10 overflow-y-auto lg:p-10 p-5'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard

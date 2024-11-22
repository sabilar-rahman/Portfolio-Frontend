import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCurrentToken } from '@/redux/featuresApi/auth/authSlice'


const ProtectedRoute = ({ children }) => {
  const token = useSelector(useCurrentToken)
  const location = useLocation()

  // If there's no token, redirect to login page
  if (!token) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute

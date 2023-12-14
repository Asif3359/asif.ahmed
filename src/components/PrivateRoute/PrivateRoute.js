'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const storedData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('password')) : null;
  useEffect(() => {

    // Replace 'yourActualAdminPassword' with the actual admin password
    if (storedData.key === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      router.push('/'); // Redirect to another route if not admin
    }
  }, [storedData, router]);

  return isAdmin ? children : null;
};

export default PrivateRoute;


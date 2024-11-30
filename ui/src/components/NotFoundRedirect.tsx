import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SegmentPlaceholder from './common/SegmentPlaceholder'

export default function NotFoundRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [navigate]);

  return (
    <SegmentPlaceholder
      text="404 - Not Found! Redirecting Home in 3 seconds..."
      icon="exclamation triangle"
    />
  );
};
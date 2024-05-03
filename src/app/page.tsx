import React from 'react';
import HomePage from './pages/homePage/page';
import { redirect } from 'next/navigation';

const page = () => {
  return (
    redirect('/pages/homePage')
  );
};

export default page;

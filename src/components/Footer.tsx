

// import React from 'react';

import { Plus } from 'lucide-react';
// import logo from "../components/LogoWhite.png";
// import mail from "../components/mail.png";
// import phone from "../components/phone.png";
// import linkeldin from "../components/linkeldin.png";
// import location from "../components/location.png";
// import instagram from "../components/instagram.png";

const Footer = () => {
  return (
    <footer className='w-[1440px] h-[48px] border-t-[1px] border-[#EEEEEE] bg-[#FFFFFF] pt-[4px] pr-[16px] pl-[32px] gap-[24px]'>
     <div className='w-[437px] h-[44px] flex'>
    <div className='h-[44px] w-[111px] border-t-[2px] bg-[#E8F0E9] border-[#4B6A4F] py-[10px] px-[16px] gap-[8px]'>
<p className='text-[#4B6A4F]'
style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  }}>All Orders</p>
    </div>
    <div className='h-[44px] w-[94px]  py-[10px] px-[16px] gap-[8px]'>
<p className='text-[#757575]'
style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  }}>Pending</p>
    </div>
    <div className='h-[44px] w-[94px]  py-[10px] px-[16px] gap-[8px]'>
<p className='text-[#757575]'
style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  }}>Reviewed</p>
    </div>
    <div className='h-[44px] w-[94px]  py-[10px] px-[16px] gap-[8px]'>
<p className='text-[#757575]'
style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  }}>Arrived</p>
    </div>
    <div className='w-[36px] h-[44px] py-[8px] px-[4px] gap-[4px] mt-[0.3rem]'><Plus size={20} color='#757575'/></div>
     </div>
    </footer>
  );
};

export default Footer;
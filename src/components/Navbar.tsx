// import React from 'react';
// import { Link } from 'react-router-dom';
import shape from '../assets/Shape.png';
import { ChevronRight } from 'lucide-react';
import { Ellipsis } from 'lucide-react';
import { Search } from 'lucide-react';
import Alert from "../assets/Alert.png";
import Ellipse from "../assets/Ellipse1.png";
import { ChevronsRight } from 'lucide-react';
import eye from '../assets/Eye.png';
import { ArrowUpDown } from 'lucide-react';
import { ListFilter } from 'lucide-react';
import Arrow from "../assets/ArrowAutofit.png";
import { ArrowDownToLine } from 'lucide-react';
import { ArrowUpToLine } from 'lucide-react';
import share from "../assets/Share.png";
import ArrowSplit from "../assets/ArrowSplit.png";


const Navbar = () => {
  return (
    <nav className=" shadow-md">
      <div className="w-[1440px] h-[56px] border-b-[1px] border-[#AFAFAF] px-[16px] py-[8px] bg-[#FFFFFF] flex justify-between ">
        <div className="w-[343px] h-[24px] gap-[16px] flex">
          <img src={shape} className='h-[1rem] w-[1rem] mt-[0.8rem] ml-[0.5rem]'></img>
          <div className='w-[303px] h-[24px] gap-[4px] flex'>
<p className='mt-[0.6rem] ml-[0.5rem] w-[66px] h-[20px] gap-[8px] text-[14px] text-[#AFAFAF]'
 style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}> Workspace</p>
<p className='text-[#AFAFAF] mt-[0.6rem] stroke-[1px]'><ChevronRight size={20}/></p>
<p className='mt-[0.6rem] w-[62px] h-[20px] gap-[8px] text-[14px] text-[#AFAFAF]'
 style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}> Folder 2</p>
<p className='text-[#AFAFAF] mt-[0.6rem] stroke-[1px]'><ChevronRight size={20}/></p>
<p className='mt-[0.6rem] w-[99px] h-[20px] gap-[8px] text-[14px] '
 style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}> Spreadsheet 3</p>
 <p className='text-[#AFAFAF] mt-[0.7rem]'><Ellipsis size={20}/></p>
          </div>
        </div>
        <div className='w-[325px] h-[40px] flex'>
        <button className='h-[40px] w-[165px] rounded-[6px] p-[10px] gap-[8px] bg-[#F6F6F6] flex'>
<p className=' stroke-[1px] text-[#757575] mt-[0.2rem] ml-[0.5rem] '><Search size={12.33} /></p>
<p className="w-[117px] h-[16px]  text-[#757575] " style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>Search within sheet</p>
        </button>
        <div className='w-[40px] h-[40px] rounded-[8px] p-[8px] gap-[12px]'>
        <img src={Alert} className='w-[24px] h-[24px]' alt="" />
        <div className="absolute top-2 right-20 bg-green-700 text-white text-[10px] w-[16px] h-[16px] border-[2px] border-[#FFFFFF] flex items-center justify-center rounded-full">
        2
      </div></div>
      <div className='w-[112px] h-[40px] rounded-[8px] py-[4px] pl-[8px] pr-[12px] gap-[8px] flex'>
      <img src={Ellipse} className='w-[28px] h-[28px]' alt="" />
      <div className='h-[26px] w-[56px] max-w-[120px]'>
<p className='text-black w-[56px] h-[16px] ml-[0.5rem]'
style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>John Doe</p>
<p className='w-[56px] h-[16px] text-[#757575] ml-[0.5rem]'
style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>john.doe...</p>
      </div>
      </div>
        </div>
      </div>
      <div className='w-[1440px] h-[48px] border-b-[1px] border-[#AFAFAF] px-[8px] py-[6px] bg-[#FFFFFF] flex'>
        <div className='w-[91px] h-[36px] rounded-[4px] p-[8px] gap-[4px] flex'>
          <p className='w-[55px] h-[20px]  '
          style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>Tool bar </p>
  <p className='stroke-[0.1px] w-[16px] h-[16px]'><ChevronsRight size={20} /></p>

        </div>
        <div className='w-[1px] h-[24px] bg-[#EEEEEE] mt-[0.4rem] ml-[0.5rem]'></div>
        <div className='w-[871px] h-[36px] gap-[4px] flex'>
        <div className='w-[118px] h-[36px] rounded-[6px] py-[8px] pl-[8px] pr-[12px] gap-[4px] flex'>
          <img src={eye} alt="" className='w-[20px] h-[20px]'/>
          <p className='h-[20px] w-[74px] ml-[0.2rem] '
          style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>Hide fields</p>
        </div>
        <div className='w-[73px] h-[36px] rounded-[6px] py-[8px] pl-[8px] pr-[12px] gap-[4px] flex'>
          <p><ArrowUpDown size={20}/></p>
          <p className='h-[20px] w-[74px] ml-[0.2rem] '
          style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>Sort</p>
        </div>
        <div className='w-[80px] h-[36px] rounded-[6px] py-[8px] pl-[8px] pr-[12px] gap-[4px] flex'>
          <p><ListFilter size={20} /></p>
          <p className='h-[20px] w-[74px] ml-[0.2rem] '
          style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>Filter</p>
        </div>
        <div className='w-[105px] h-[36px] rounded-[6px] py-[8px] pl-[8px] pr-[12px] gap-[4px] flex'>
          <img src={Arrow} alt="" className='w-[20px] h-[20px]'/>
          <p className='h-[20px] w-[74px] ml-[0.2rem] '
          style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>Cell view</p>
        </div>
        </div>
        <div className='w-[437px] h-[36px] gap-[8px] flex'>
          <div className='w-[279px] h-[36px] gap-[8px] flex'>
            <button className='flex w-[90px] h-[36px] rounded-[6px] border-[1px] border-[#EEEEEE] py-[5px] pr-[12px] pl-[8px]'>
              <ArrowDownToLine size={20} className='stroke-[1px] text-[#545454]'/>
              <p className='w-[46px] h-[20px] text-[#545454]'style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>Import</p>
            </button>
            <button className='flex w-[89px] h-[36px] rounded-[6px] border-[1px] border-[#EEEEEE] py-[5px] pr-[12px] pl-[8px]'>
              <ArrowUpToLine size={20} className='stroke-[1px] text-[#545454]'/>
              <p className='w-[46px] h-[20px] text-[#545454]'style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>Export</p>
            </button>
            <button className='flex w-[84px] h-[36px] rounded-[6px] border-[1px] border-[#EEEEEE] py-[7px] pr-[12px] pl-[8px]'>
              <img src={share} alt="" />
              <p className='w-[46px] h-[20px] text-[#545454]'style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}>Share</p>
            </button>
          </div>
          
            <button className='flex w-[150px] h-[36px] rounded-[6px] py-[8px] px-[24px] bg-[#4B6A4F] text-[#FFFF]'
            style={{
    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  }}><img src={ArrowSplit}/>
    <p className='ml-[0.2rem] '>New Action</p></button>
         

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
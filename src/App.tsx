// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import AppRoutes from './routes/AppRoutes';
import { ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import ArrowSplit from './assets/Shape1.png';
import ArrowSplit2 from './assets/ArrowSplit.png';
import { Ellipsis } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Link2 } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
import breifcase from './assets/Briefcase.png';
import CalendarDays from './assets/calendar.png';
import Status from './assets/Status.png';
import user from './assets/user.png';
import globe from './assets/Globe.png';
import assigned from './assets/assigned.png';
import './index.css';
type RowData = {
  job: string;
  submitted: string;
  status: 'In-process' | 'Complete' | 'Blocked' | 'Need to start';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  value: string;
};

const App = () => {
  const rowCount = 25;
  const [rows, setRows] = React.useState<RowData[]>([
    // your row data{
    {
      job: 'Launch social media campaign for program',
      submitted: '15-11-2024',
      status: 'In-process',
      submitter: 'Aisha Patel',
      url: 'www.aishapatel.com',
      assigned: 'Sophie Choudhury',
      priority: 'Medium',
      dueDate: '20-11-2024',
      value: '6,200,000',
    },
    {
      job: 'Update press kit for company redesign',
      submitted: '30-10-2024',
      status: 'Need to start',
      submitter: 'Irfan Khan',
      url: 'www.irfankhan.com',
      assigned: 'Tejas Pandey',
      priority: 'High',
      dueDate: '30-10-2024',
      value: '3,500,000',
    },
    {
      job: 'Finalize user testing feedback for application',
      submitted: '05-12-2024',
      status: 'In-process',
      submitter: 'Mark Johnson',
      url: 'www.markjohnson.com',
      assigned: 'Rachel Lee',
      priority: 'Medium',
      dueDate: '10-12-2024',
      value: '4,750,000',
    },
    {
      job: 'Design new features for the website ',
      submitted: '10-01-2025',
      status: 'Complete',
      submitter: 'Emily Green',
      url: 'www.emilygreen.com',
      assigned: 'Tom Wright',
      priority: 'Low',
      dueDate: '15-01-2025',
      value: '5,900,000',
    },
    {
      job: 'Prepare financial report for Q4',
      submitted: '25-01-2025',
      status: 'Blocked',
      submitter: 'Jessica Brown',
      url: 'www.jessicabrown.com',
      assigned: 'Kevin Smith',
      priority: 'Low',
      dueDate: '30-01-2025',
      value: '2,800,000',
    },
  ]);

  return (
    <Router>
      <div className="">
        <Navbar />

        <main className="bg-[#F6f6f6] h-[872px] w-[1440px] gap-[1px]">
          {/* <AppRoutes /> */}
          <div className="flex">
            <div className="w-[32px] h-[40px] bg-white"></div>
            <div className="bg-[#E2E2E2] w-[632px] h-[40px] flex p-[8px]">
              <div className="w-[158px] h-[24px] bg-[#EEEEEE] flex">
                <Link2 className="mt-[0.4rem] ml-[0.4rem] h-[13.666666507720947px] w-[17.333333969116211px] text-[#1A8CFF]" />
                <div className="w-[130px] h-[16px] p-[4px] text-[#545454]">
                  <p
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                  >
                    Q3 Financial Overview
                  </p>
                </div>
              </div>
              <RefreshCw
                size={17}
                className="rotate-90 ml-[1rem] mt-[0.2rem]"
                color="#FA6736"
                onClick={() => console.log('Refresh clicked')}
              />
            </div>
            <div className="w-[124px] h-[40px] bg-[#FFFFFF]"></div>
            <div className="w-[124px] bg-[#D2E0D4]">
              <div className="w-[81px] h-[24px] rounded-[4px] py-[2px] px-[4px] flex">
                <img src={ArrowSplit} className="mt-[0.7rem] ml-[1rem] h-[12px] w-[12px]" alt="" />
                <p
                  className="text-[#505450] ml-[0.7rem] w-[29px] h-[20px] mt-[0.4rem]"
                  style={{
                    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0px',
                  }}
                  onClick={() => console.log('ABC clicked')}
                >
                  ABC
                </p>
                <p className="text-[#AFAFAF] mt-[0.7rem] ml-[0.7rem]">
                  <Ellipsis size={15} onClick={() => console.log('ABC ellipsis clicked')} />
                </p>
              </div>
            </div>
            <div className="w-[251px] h-[40px] px-[16px] flex bg-[#DCCFFC] ">
              <div className="w-[179px] h-[24px] rounded-[4px] py-[2px] px-[4px] flex ml-[1.5rem]">
                <img src={ArrowSplit2} className="mt-[0.7rem]  h-[16px] w-[16px]" alt="" />
                <p
                  className="text-[#505450] ml-[0.7rem] w-[140px] h-[20px] mt-[0.4rem]"
                  style={{
                    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0px',
                  }}
                  onClick={() => console.log('Answer a question clicked')}
                >
                  Answer a question
                </p>
                <p className="h-[16px] w-[16px] text-[#AFAFAF] mt-[0.7rem] ml-[0.7rem]">
                  <Ellipsis
                    size={15}
                    onClick={() => console.log('Answer a question ellipsis clicked')}
                  />
                </p>
              </div>
            </div>
            <div className="w-[124px] h-[40px] px-[16px] flex bg-[#FAC2AF] ">
              <div className="w-[102px] h-[24px] rounded-[4px] py-[2px] px-[4px] flex ">
                <img src={ArrowSplit2} className="mt-[0.7rem]  h-[16px] w-[16px]" alt="" />
                <p
                  className="text-[#505450] ml-[0.5rem] w-[140px] h-[20px] mt-[0.4rem]"
                  style={{
                    fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0px',
                  }}
                  onClick={() => console.log('Extract clicked')}
                >
                  Extract
                </p>
                <p className="h-[16px] w-[16px] text-[#AFAFAF] mt-[0.7rem] ml-[0.5rem]">
                  <Ellipsis size={15} onClick={() => console.log('Extract ellipsis clicked')} />
                </p>
              </div>
            </div>
            <div className="w-[124px] border-r border-[#ffffff] px-[8px] gap-[8px]">
              <Plus
                onClick={() => console.log('Plus button clicked')}
                className="ml-[3.2rem] mt-[0.9rem] text-[#04071E] h-[14.582719802856445px] w-[14.582719802856445px]"
              />
            </div>
          </div>
          <div className="flex overflow-x-auto border-[#EEEEEE]">
            {/* Serial Number Column */}
            <div className="flex flex-col bg-gray-100 text-center border-r border-[#EEEEEE] w-[32px] shrink-0">
              {/* Empty cell for header alignment */}
              <div className=" border-b border-[#EEEEEE]" />
              {/* Numbered rows */}
              <p className="h-[30px] w-[32px] pt-[7px] text-[#AFAFAF]">#</p>
              {Array.from({ length: rowCount }, (_, i) => (
                <div
                  key={i}
                  className="h-8 border-b-[1px]  border-[#EEEEEE] bg-[#FFFFFF] flex items-center justify-center text-sm text-gray-600"
                >
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Spreadsheet Content */}
            <div className="flex-1">
              {/* Column Headers */}
              <div className="flex h-8 border-[2px] border-[#FFFFFF] ">
                {/* Example header cells */}
                <div className="w-[256px] pr-[4px] pl-[8px] border-r border-[#EEEEEE] flex items-center justify-center font-medium text-sm">
                  <img
                    src={breifcase}
                    className="ml-[1rem] h-[16px] w-[16px] "
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                    alt=""
                  />
                  <p className="w-[200px] h-[16px] text-[#757575] ml-[0.5rem] mb-[0.2rem]">
                    Job Request
                  </p>
                  <ChevronDown
                    color="#AFAFAF"
                    className="w-[20px] h-[20px] m-[4px]"
                    onClick={() => console.log('Sort clicked for Job Request')}
                  />
                </div>
                <div className="w-[124px] border-r border-[#EEEEEE] flex items-center justify-center font-medium text-sm">
                  <img
                    src={CalendarDays}
                    className="ml-[0.5rem] h-[12px] w-[12px] "
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                    alt=""
                  />
                  <p className="w-[68px] h-[16px] text-[#757575] ml-[0.5rem] mb-[0.2rem]">
                    Submitted
                  </p>
                  <ChevronDown
                    color="#AFAFAF"
                    className="w-[12px] h-[12px] m-[4px]"
                    onClick={() => console.log('Sort clicked for Submitted')}
                  />
                </div>
                <div className="w-[124px] h-[16px] mt-[0.6rem] border-r border-[#EEEEEE] flex items-center justify-center font-medium text-sm">
                  <img
                    src={Status}
                    className="ml-[0.5rem] h-[16px] w-[16px] "
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                    alt=""
                  />
                  <p className="w-[68px] h-[16px] text-[#757575] ml-[0.5rem] mb-[0.2rem]">Status</p>
                  <ChevronDown
                    color="#AFAFAF"
                    className="w-[12px] h-[12px] m-[4px]"
                    onClick={() => console.log('Sort clicked for Status')}
                  />
                </div>
                <div className="w-[124px] border-r border-[#EEEEEE] flex items-center justify-center font-medium text-sm">
                  <img
                    src={user}
                    className="ml-[0.5rem] h-[16px] w-[16px] "
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                    alt=""
                  />
                  <p className="w-[68px] h-[16px] text-[#757575] ml-[0.5rem] mb-[0.2rem]">
                    Submitter
                  </p>
                  <ChevronDown
                    color="#AFAFAF"
                    className="w-[12px] h-[12px] m-[4px]"
                    onClick={() => console.log('Sort clicked for Submitter')}
                  />
                </div>
                <div className="w-[124px] border-r border-[#EEEEEE] flex items-center justify-center font-medium text-sm">
                  <img
                    src={globe}
                    className="ml-[0.5rem] h-[16px] w-[16px] "
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                    alt=""
                  />
                  <p className="w-[68px] h-[16px] text-[#757575] ml-[0.5rem] mb-[0.2rem]">URL</p>
                  <ChevronDown
                    color="#AFAFAF"
                    className="w-[12px] h-[12px] m-[4px]"
                    onClick={() => console.log('Sort clicked for URL')}
                  />
                </div>
                {/* Add more columns as needed */}
                <div className="w-[124px] bg-[#E8F0E9] border-r border-[#EEEEEE] flex items-center justify-center font-medium text-sm">
                  <img
                    src={assigned}
                    className="ml-[0.5rem] h-[16px] w-[16px] "
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                    alt=""
                  />
                  <p className="w-[68px] h-[16px] text-[#757575] ml-[0.5rem] mb-[0.2rem]">
                    Assigned
                  </p>
                  <ChevronDown
                    color="#AFAFAF"
                    className="w-[12px] h-[12px] m-[4px]"
                    onClick={() => console.log('Sort clicked for Assigned')}
                  />
                </div>
                <div className="w-[126.5px] border-r bg-[#EAE3FC] border-[#EEEEEE] flex items-center justify-center font-medium text-sm">
                  <p>Priority</p>
                </div>
                <div className="w-[126.5px] border-r bg-[#EAE3FC] border-[#EEEEEE] flex items-center justify-center font-medium text-sm">
                  <p>Due Date</p>
                </div>
                <div className="w-[124px] border-r bg-[#FFE9E0] border-[#EEEEEE] flex items-center justify-center font-medium text-sm">
                  <p>Est. Value</p>
                </div>
                <div className="w-[124px] border-r bg-[#ffff] border-[#EEEEEE] flex items-center justify-center font-medium text-sm"></div>
              </div>

              {/* Data Rows */}
              {rows.map((row, i) => (
                <div key={i} className="flex h-8 border-b border-[#EEEEEE] bg-[#FFFFFF]">
                  <div className="w-[256px] border-r border-[#EEEEEE] flex items-center px-[8px] text-sm">
                    <input
                      type="text"
                      value={row.job}
                      onChange={(e) => {
                        const updated = [...rows];
                        updated[i].job = e.target.value;
                        setRows(updated);
                      }}
                      className="w-full h-full px-2 text-xs font-semibold text-[#121212] outline-none"
                      style={{
                        fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                        fontWeight: 600,
                        fontSize: '12px',
                        lineHeight: '16px',
                      }}
                    />
                  </div>
                  <input
                    type="text"
                    value={row.submitted}
                    onChange={(e) => {
                      const updated = [...rows];
                      updated[i].submitted = e.target.value;
                      setRows(updated);
                    }}
                    className="w-[124px] border-r border-[#EEEEEE] flex items-center px-2 text-sm  text-[#121212] text-right justify-end"
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                  />
                  <div
                    className={`w-[124px] border-r border-[#EEEEEE] flex items-center justify-center px-2 text-xs font-semibold 
    `}
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '10px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                  >
                    <select
  value={row.status}
  onChange={(e) => {
    const updated = [...rows];
    updated[i].status = e.target.value as RowData["status"];
    setRows(updated);
  }}
  className={`w-[90px] h-[24px] px-[8px] py-[4px] rounded-[100px] text-xs font-semibold text-center outline-none
    ${
      row.status === "In-process"
        ? "bg-yellow-100 text-yellow-800"
        : row.status === "Complete"
        ? "bg-green-100 text-green-800"
        : row.status === "Blocked"
        ? "bg-red-100 text-red-700"
        : "bg-gray-100 text-gray-600"
    }`}
>
  <option value="In-process">In-process</option>
  <option value="Complete">Complete</option>
  <option value="Blocked">Blocked</option>
  <option value="Need to start">Need to start</option>
</select>

                  </div>
                  <input
                    type="text"
                    value={row.submitter}
                    onChange={(e) => {
                      const updated = [...rows];
                      updated[i].submitter = e.target.value;
                      setRows(updated);
                    }}
                    className="w-[124px] border-r border-[#EEEEEE] flex items-center px-2 text-sm text-[#121212]"
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                  />
                  <input
                    type="text"
                    value={row.url}
                    onChange={(e) => {
                      const updated = [...rows];
                      updated[i].url = e.target.value;
                      setRows(updated);
                    }}
                    className="w-[124px] border-r border-[#EEEEEE] flex items-center px-2 text-sm text-[#121212] underline overflow-hidden"
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                  />
                  
                  <input
                    type="text"
                    value={row.assigned}
                    onChange={(e) => {
                      const updated = [...rows];
                      updated[i].assigned = e.target.value;
                      setRows(updated);
                    }}
                    className="w-[124px] border-r border-[#EEEEEE] flex items-center px-2 text-sm text-[#121212]"
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                  />
                 
                  <select
  value={row.priority}
  onChange={(e) => {
    const updated = [...rows];
    updated[i].priority = e.target.value as RowData["priority"];
    setRows(updated);
  }}
  className={`w-[126px] border-r border-[#EEEEEE] text-center flex items-center justify-center px-2 text-xs font-semibold rounded
    ${
      row.priority === 'High'
        ? ' text-[#EF4D44]'
        : row.priority === 'Medium'
          ? ' text-[#C29210]'
          : row.priority === 'Low'
            ? ' text-[#1A8CFF]'
            : ' text-[#121212]'
    }`}
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>

                  <input
                    type="text"
                    value={row.dueDate}
                    onChange={(e) => {
                      const updated = [...rows];
                      updated[i].dueDate = e.target.value;
                      setRows(updated);
                    }}
                    className="w-[124px] border-r border-[#EEEEEE] flex items-center px-2 text-sm  text-[#121212] text-right justify-end"
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                  />
                  <input
                    type="text"
                    value={row.value}
                    onChange={(e) => {
                      const updated = [...rows];
                      updated[i].value = e.target.value;
                      setRows(updated);
                    }}
                    className="w-[124px] border-r border-[#EEEEEE] flex items-center px-2 text-sm  text-[#121212] text-right justify-end"
                    style={{
                      fontFamily: `'Inter', 'system-ui', 'sans-serif'`,
                      fontWeight: 600,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                    }}
                  />
                </div>
              ))}
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={`empty-${i}`} className="flex h-8 border-b border-[#EEEEEE] bg-white">
                  <div className="w-[256px] border-r border-[#EEEEEE]" />
                  <div className="w-[124px] border-r border-[#EEEEEE]" />
                  <div className="w-[124px] border-r border-[#EEEEEE]" />
                  <div className="w-[124px] border-r border-[#EEEEEE]" />
                  <div className="w-[124px] border-r border-[#EEEEEE]" />
                  <div className="w-[124px] border-r border-[#EEEEEE]" />
                  <div className="w-[127.2px] border-r border-[#EEEEEE]" />
                  <div className="w-[127.5px] border-r border-[#EEEEEE]" />
                  <div className="w-[124px] border-r border-[#EEEEEE]" />
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

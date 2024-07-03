import React,{useState} from 'react'
import './tab.css'
import { FaCheckCircle } from "react-icons/fa";


const BsTabs = () => {
    const tabs = ['Buyer', 'Supplier'];
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    return (
      <div className="tabs-container">
        <div className="tab-buttons">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={index === activeTab ? 'active' : ''}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </button>
          ))}
          <div
            className="underline"
            style={{
              width: `${100 / tabs.length}%`,
              left: `${activeTab * (100 / tabs.length)}%`
            }}
          />
        </div>
        <div className="tab-content mt-5">
          {/* Render content based on activeTab */}
          {tabs[activeTab] === 'Buyer' && <div>
            <ul className='text-white text-lg'>
            <li style={{display:'flex', textAlign:'left'}}><FaCheckCircle className='inline mr-3' style={{color:'lightgreen'}}/><p>Post your requirement</p>
            </li>
            <li style={{display:'flex', textAlign:'left'}}><FaCheckCircle className='inline mr-3 h-7 w-7' style={{color:'lightgreen'}}/><p>Sit back for multiple suppliers to contact you.</p>
            </li>
            <li style={{display:'flex', textAlign:'left'}}><FaCheckCircle className='inline mr-3 h-7 w-7' style={{color:'lightgreen'}}/><p>Sit back for multiple suppliers to contact you.</p>
            </li>
           
            </ul>
            </div>}
          {tabs[activeTab] === 'Supplier' && <div><ul className='text-white text-lg'>
            <li style={{display:'flex'}}><FaCheckCircle className='inline mr-3' style={{color:'lightgreen'}}/><p>lorem1</p>
            </li>
            <li style={{display:'flex'}}><FaCheckCircle className='inline mr-3' style={{color:'lightgreen'}}/><p>lorem2</p>
            </li>
            <li style={{display:'flex'}}><FaCheckCircle className='inline mr-3' style={{color:'lightgreen'}}/><p>lorem3</p>
            </li>
           
            </ul></div>}
          
        </div>
      </div>
    );
  };

export default BsTabs





import { Menu, Dropdown } from 'antd';
import React, { useState } from 'react'
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function DropDown() {

  
  const [dropText, setDropText] = useState("Alphabetical");
  const setText = (text) => {
    setDropText(text)
  }
  
  return (
    
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0"  onClick={(e) => {
                
                setText("Alphabetical")
              }}>
                Alphabetical
              </Menu.Item>
              <Menu.Item key="1" onClick={(e) => {
              
                setText("Newest")
              }}>
                Newest
              </Menu.Item>
              <Menu.Item key="2" onClick={(e) => {
                
                setText("Oldest")
              }}>
              Oldest
              </Menu.Item>
              <Menu.Item key="3" onClick={(e) => {
                
                setText("Most Viewed")

              }}>
                Most Viewed
              </Menu.Item>
            </Menu>
          )}
          trigger={['click']}>
          <div className='flex  border items-center w-[80%] md:w-[40%] m-auto '>
              <div className='bg-zinc-200 py-3 px-4'><p className='uppercase'>sort</p></div>
              <div className='flex flex-row justify-between  mx-2 w-full'>
                  <a className="ant-dropdown-link text-xs whitespace-nowrap" 
                    onClick={e => e.preventDefault()}>
                    {dropText}
                  </a>
                  <ChevronDownIcon className='w-5 ml-5'/>
              </div>
          </div>
           

        </Dropdown>
      
  );
}




import { Menu, Dropdown } from 'antd';
  
export default function DropDown() {
  
  return (
    <div style={{
      display: 'block', width: 700, padding: 30
    }}>
      <>
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
                Menu Item One
              </Menu.Item>
              <Menu.Item key="1">
              Menu Item Two
              </Menu.Item>
              <Menu.Item key="1">
              Menu Item Three
              </Menu.Item>
            </Menu>
          )}
          trigger={['click']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Open Dropdown
          </a>
        </Dropdown>
      </>
    </div>
  );
}


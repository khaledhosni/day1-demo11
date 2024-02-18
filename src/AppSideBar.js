import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="app-container">
      <nav>
        <div className="sidebar">
          <div style={{ height: "100%" }}>
            <Sidebar style={{ position: "absolute", top: 0, bottom: 0 }}>
              <Menu>
                {/* <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu> */}

                <MenuItem component={<Link to={"/"} />}> Home </MenuItem>

                <MenuItem component={<Link to={"/users"}  />}> Users </MenuItem>
                <MenuItem component={<Link to={"/about"} />}> About </MenuItem>
              </Menu>
            </Sidebar>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;

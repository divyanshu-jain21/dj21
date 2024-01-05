import React, { useState ,useEffect} from 'react';
import { useSearchParams } from "react-router-dom";

// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import Sidebar1 from './../../dashboard/sidebar1/Sidebar1'
import Profile from "../setting/Profile";
import Tax from "../setting/Tax";
import Trading from "../setting/Trading";
import "./SettingMain.css"
// import BottomToTop from '../../BottomToTop/BottomToTop';
// ----------------for small screen navigation------------------
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TbUnlink } from "react-icons/tb";


function SettingMain() {

  // ----------------for small screen navigation------------------
  const [openTab, setOpenTab] = useState("profile");
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchParams] = useSearchParams();
  const getdata = searchParams.get("activetab");
  useEffect(() => {
    if (document.getElementById(getdata)) {
      document.getElementById(getdata).click();
    }
    if (searchParams.get("account_id")) {
      document.getElementById("nav-tax-tab").click();
    }
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Sidebar1>
      {/* <BottomToTop/> */}
      <div className="pt-3 bg-white">
        <section>
          <nav className="settabheader">
            <div className="nav" role="tablist">
              <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">
                Profile
              </button>
              <button className="nav-link" id="nav-tax-tab" data-bs-toggle="tab" data-bs-target="#nav-tax" type="button" role="tab" aria-controls="nav-tax" aria-selected="false">
                Tax
              </button>
              {/* <button className="nav-link" id="nav-trading-tab" data-bs-toggle="tab" data-bs-target="#nav-trading" type="button" role="tab" aria-controls="nav-trading" aria-selected="false">
                Trading
              </button> */}
            </div>
            <hr className="w-100 text-primary mt-4" />

            
          </nav>
          {/* ------------------------------for small screen--------------------- */}
          <nav className="Smallsettabheader">
            <Button className="linkbuttondash" aria-describedby={id} onClick={handleClick}>
              Settings <TbUnlink className="ms-2 fs-4" />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              // onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2 }}>
                <nav className="">
                  <div className="nav" role="tablist">
                    <button
                      className={openTab === "profile" ? "nav-link active" : "nav-link"}
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="text"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="true"
                      onClick={() => { setOpenTab("profile"); handleClose() }}

                    >
                      Profile
                    </button>
                    <button
                      className={openTab === "tax" ? "nav-link active" : "nav-link"}
                      id="nav-tax-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-tax"
                      type="text"
                      role="tab"
                      aria-controls="nav-tax"
                      aria-selected="false"
                      onClick={() => { setOpenTab("tax"); handleClose() }}
                    >
                      Tax
                    </button>
                    {/* <button
                      className={openTab === "trading" ? "nav-link active" : "nav-link"}
                      id="nav-trading-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-trading"
                      type="text"
                      role="tab"
                      aria-controls="nav-trading"
                      aria-selected="false"
                      onClick={() => { setOpenTab("trading"); handleClose() }}
                    >
                      Trading
                    </button> */}
                  </div>
                </nav>
              </Typography>
            </Popover>
          </nav>
        </section>
        <section>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <Profile />
            </div>
            <div className="tab-pane fade" id="nav-tax" role="tabpanel" aria-labelledby="nav-tax-tab">
              <Tax />
            </div>
            {/* <div className="tab-pane fade" id="nav-trading" role="tabpanel" aria-labelledby="nav-trading-tab">
              <Trading />
            </div> */}
          </div>
        </section>
      </div>
    </Sidebar1>
  );
}

export default SettingMain
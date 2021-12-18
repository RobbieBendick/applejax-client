import React from "react";
import { useStyletron } from "baseui";
import { useNavigate } from "react-router-dom";

//base ui components
import { AppNavBar, setItemActive } from "baseui/app-nav-bar";
import { ChevronDown, Delete, Overflow, Upload } from "baseui/icon";
import { Block } from "baseui/block";
import { Layer } from "baseui/layer";

const Layout = ({ children }) => {
  const [css] = useStyletron();
  let navigate = useNavigate();

  const [mainItems, setMainItems] = React.useState([
    { icon: Upload, label: "Register", href: "/register" },
    {
      active: true,
      icon: ChevronDown,
      label: "Login",
      navExitIcon: Delete,
      href: "/login",
    },
  ]);
  return (
    <>
      <Layer>
        <div
          className={css({
            boxSizing: "border-box",
            width: "100vw",
            position: "fixed",
            top: "0",
            left: "0",
          })}
        >
          <AppNavBar
            title="Applejax"
            mainItems={mainItems}
            onMainItemSelect={(item) => {
              setMainItems((prev) => setItemActive(prev, item));
              debugger;
              navigate(item.href);
            }}
            username=""
            usernameSubtitle=""
            onUserItemSelect={(item) => console.log(item)}
          />
        </div>
      </Layer>
      <Block
        height={["20px", "40px", "80px", "160px"]}
        backgroundColor="primary200"
        style={{ marginTop: "50px" }}
      >
        {children}
      </Block>
    </>
  );
};

export default Layout;

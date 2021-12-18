import React from "react";
import { AppNavBar, setItemActive } from "baseui/app-nav-bar";
import { ChevronDown, Delete, Overflow, Upload } from "baseui/icon";
import { Block } from "baseui/block";

const Layout = ({ children }) => {
  const [mainItems, setMainItems] = React.useState([
    { icon: Upload, label: "Main A" },
    {
      active: true,
      icon: ChevronDown,
      label: "Main B",
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: "Secondary A" },
        { icon: Upload, label: "Secondary B" },
      ],
    },
  ]);
  return (
    <>
      <AppNavBar
        title="Title"
        mainItems={mainItems}
        onMainItemSelect={(item) => {
          setMainItems((prev) => setItemActive(prev, item));
        }}
        username="Umka Marshmallow"
        usernameSubtitle="5 Stars"
        userItems={[
          { icon: Overflow, label: "User A" },
          { icon: Overflow, label: "User B" },
        ]}
        onUserItemSelect={(item) => console.log(item)}
      />
      <Block
        height={["20px", "40px", "80px", "160px"]}
        backgroundColor="primary200"
      >
        {children}
      </Block>
    </>
  );
};

export default Layout;

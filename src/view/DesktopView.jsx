import React from "react";
import "./DesktopView.css";
import DesktopHome from "../components/DesktopSidebar/DesktopHome/DesktopHome";
import DesktopSidebar from "../components/DesktopSidebar/SidebarDesktop/SidebarDesktop";
import DesktopNotes from "../components/DesktopSidebar/DesktopNotes/DesktopNotes";
import usePocketContext from "../context/useContext";


function DesktopView() {
  const { selected } = usePocketContext();

  return (
    <div className="desktop">
      <DesktopSidebar />
      {selected.length > 0 ? <DesktopNotes /> : <DesktopHome />}
    </div>
  );
}

export default DesktopView;
'use client';
import { Menu } from "lucide-react";
import { useState } from "react";
import Drawer from "../Drawer";

export default function DrawerButton() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <span onClick={() => setOpenDrawer(true)}>
        <Menu className="lg:hidden cursor-pointer text-white" size={32} />
      </span>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  );
}

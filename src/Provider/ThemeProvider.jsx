"use client";
import React, { useEffect, useState, useCallback } from "react";
import context from "./context";
import { usePathname } from "next/navigation";

const ThemeProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const pathname = usePathname();

  const toggleMenu = useCallback((value) => {
    setMenuStatus((prev) =>
      value === undefined
        ? !prev
        : typeof value === "boolean"
        ? value
        : !!value
    );
  }, []);

  const toggleMegaMenu = useCallback((value) => {
    setOpenMegaMenu((prev) => {
      const newValue =
        value === undefined
          ? !prev
          : typeof value === "boolean"
          ? value
          : !!value;

      document.body.classList.toggle("megamenu-popup-active", newValue);
      return newValue;
    });
  }, []);

  const toggleSearch = useCallback(() => {
    setOpenSearch((prev) => !prev);
  }, []);

  const toggleSidebar = useCallback(() => {
    setOpenSidebar((prev) => {
      document.body.classList.toggle("locked", !prev);
      return !prev;
    });
  }, []);

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => {
      document.body.classList.toggle("locked", !prev);
      return !prev;
    });
  }, []);

  useEffect(() => {
    toggleMegaMenu(false); // ensure closed on mount
  }, [toggleMegaMenu]);

  useEffect(() => {
    toggleMenu(false);
    setIsExpanded(false);
    setOpenMegaMenu(false);
    toggleMegaMenu(false);
    document.body.classList.remove("megamenu-popup-active");
  }, [pathname, toggleMenu, toggleMegaMenu]);

  const value = {
    handleToggle,
    isExpanded,
    setIsExpanded,
    menuStatus,
    openSearch,
    toggleMenu,
    toggleSearch,
    toggleMegaMenu,
    openMegaMenu,
    openSidebar,
    setOpenSidebar,
    toggleSidebar,
    setOpenMegaMenu,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ThemeProvider;

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

  // --- Pure state togglers (no side effects) ---
  const toggleMenu = useCallback((value) => {
    setMenuStatus((prev) =>
      value === undefined ? !prev : typeof value === "boolean" ? value : !!value
    );
  }, []);

  const toggleMegaMenu = useCallback((value) => {
    setOpenMegaMenu((prev) =>
      value === undefined ? !prev : typeof value === "boolean" ? value : !!value
    );
  }, []);

  const toggleSearch = useCallback(() => {
    setOpenSearch((prev) => !prev);
  }, []);

  const toggleSidebar = useCallback(() => {
    setOpenSidebar((prev) => !prev);
  }, []);

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  // --- Effects for syncing body classes ---
  useEffect(() => {
    document.body.classList.toggle("megamenu-popup-active", openMegaMenu);
  }, [openMegaMenu]);

  useEffect(() => {
    document.body.classList.toggle("locked", isExpanded || openSidebar);
  }, [isExpanded, openSidebar]);

  // --- Reset on route change ---
  useEffect(() => {
    toggleMenu(false);
    setIsExpanded(false);
    setOpenMegaMenu(false);
    setOpenSidebar(false);
    setOpenSearch(false);

    document.body.classList.remove("megamenu-popup-active", "locked");
  }, [pathname, toggleMenu]);

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

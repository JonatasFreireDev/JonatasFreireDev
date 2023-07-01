"use client";
import { useCallback, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, [toggleVisible]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        right: "50px",
      }}
    >
      <button
        style={{
          position: "fixed",
          bottom: "10px",
        }}
      >
        <IoIosArrowUp
          onClick={scrollToTop}
          size={30}
          style={{ display: visible ? "inline" : "none" }}
        />
      </button>
    </div>
  );
};

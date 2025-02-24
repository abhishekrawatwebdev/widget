import React from "react";
import {
  IoCamera,
  IoChatbox,
  IoHelpOutline,
  IoLogoWhatsapp,
  IoSettingsOutline,
} from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdEdit, MdOutlineEmail, MdOutlineRefresh } from "react-icons/md";
import { FaLinkedin, FaSave, FaStore } from "react-icons/fa";
import { IoIosSearch, IoMdHome } from "react-icons/io";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaCartShopping,
  FaDownload,
  FaHeart,
  FaInfo,
  FaLock,
  FaLockOpen,
  FaMinus,
  FaPlus,
  FaRegStar,
  FaTrash,
  FaUpload,
  FaUser,
} from "react-icons/fa6";

const getIcon = (name, config) => {
  const icons = [
    {
      name: "whatsapp",
      icon: (
        <IoLogoWhatsapp
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "telephone",
      icon: (
        <BsTelephone
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "email",
      icon: (
        <MdOutlineEmail
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "home",
      icon: (
        <IoMdHome
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "info",
      icon: (
        <FaInfo
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "settings",
      icon: (
        <IoSettingsOutline
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "help",
      icon: (
        <IoHelpOutline
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "chat",
      icon: (
        <IoChatbox
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "search",
      icon: (
        <IoIosSearch
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "cart",
      icon: (
        <FaCartShopping
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "user",
      icon: (
        <FaUser
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "lock",
      icon: (
        <FaLock
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "unlock",
      icon: (
        <FaLockOpen
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "refresh",
      icon: (
        <MdOutlineRefresh
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "arrow-left",
      icon: (
        <FaArrowLeft
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "arrow-right",
      icon: (
        <FaArrowRight
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "arrow-up",
      icon: (
        <FaArrowUp
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "arrow-down",
      icon: (
        <FaArrowDown
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "plus",
      icon: (
        <FaPlus
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "minus",
      icon: (
        <FaMinus
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "trash",
      icon: (
        <FaTrash
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "download",
      icon: (
        <FaDownload
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "upload",
      icon: (
        <FaUpload
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "camera",
      icon: (
        <IoCamera
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "heart",
      icon: (
        <FaHeart
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "star",
      icon: (
        <FaRegStar
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "edit",
      icon: (
        <MdEdit
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "save",
      icon: (
        <FaSave
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "store",
      icon: (
        <FaStore
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "facebook",
      icon: (
        <TiSocialFacebook
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "instagram",
      icon: (
        <TiSocialInstagram
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
    {
      name: "linkedin",
      icon: (
        <FaLinkedin
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      ),
    },
  ];
  try {
    const iconObject = icons.find((icon) => icon.name === name);
    if (!iconObject) {
      console.error(`Icon "${name}" not found.`);
      return (
        <IoLogoWhatsapp
          style={{ color: config?.text_color || "black", fontSize: "20px" }}
        />
      );
    }
    return iconObject.icon;
  } catch (error) {
    console.error("Error fetching icon:", error);
    return (
      <IoLogoWhatsapp
        style={{ color: config?.text_color || "black", fontSize: "20px" }}
      />
    );
  }
};

export default getIcon;

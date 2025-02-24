import React, { useState, useEffect, useRef } from "react";
import { BiSupport } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import "./HelpWidget.css"; // Updated CSS import
import { fetchConfigByDomain } from "./services";
import {
  mapListButtonStyleFromConfig,
  mapListContainerStyleFromConfig,
  mapToggleButtonStyleFromConfig,
  mapTooltipStyleFromConfig,
} from "./config/style-mapper";
import ModalComponent from "./component/modal-component/Modal";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import getIcon from "./data/icons";

const HelpWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonsData, setButtonsData] = useState([]);
  const [mainButtonConfig, setMainButtonConfig] = useState(null);
  const [configData, setConfigData] = useState({});
  const [domain, setDomain] = useState(window?.location?.hostname);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [isTooltipOn, setIsTooltipOn] = useState(true);

  const toggleWidget = () => {
    setIsOpen((prevState) => !prevState);
    setIsTooltipOn(!isTooltipOn);
  };

  const handleClickOutside = (event) => {
    if (widgetRef.current && widgetRef.current === event.target) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setDomain(window.location.hostname);
  }, [window?.location]);

  const fetchButtonsData = async () => {
    const response = await fetchConfigByDomain(domain);

    if (response && response.domain === domain) {
      setConfigData(response);
      setButtonsData(response.buttons);
      setMainButtonConfig(response.main_toggle_button);
      setIsLoading(false);
    }
  };

  const isMobileDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iphone|ipad|ipod|mobile/i.test(userAgent);
  };

  useEffect(() => {
    if (domain) {
      fetchButtonsData();
    }
  }, [domain]);

  const handleButtonClick = (button) => {
    setClickedButton(button);
    if (button.action_type === "REDIRECT") {
      window.location.href = button.redirect_url;
    }
    if (button.action_type === "MODAL" || button.action_type === "CALL") {
      setIsOpen(false);
      setIsModalOpen(true);
    }
  };

  if (!mainButtonConfig?.is_enabled) {
    return null;
  }

  if (isLoading || !mainButtonConfig || !mainButtonConfig?.is_enabled) {
    return null;
  }

  return (
    <div>
      {isModalOpen && clickedButton?.action_type === "CALL" ? (
        <ModalComponent
          onClose={() => {
            setIsModalOpen(false);
            setClickedButton({});
            setIsCopied(false);
          }}
          title={clickedButton?.modal_title || "Call Us"}
        >
          <div
            className="zithara-widget-call-modal-content"
            onClick={() => {
              if (isMobileDevice() && clickedButton?.action_type === "CALL") {
                const phoneNumber = clickedButton?.modal_content || "";
                window.location.href = `tel:${phoneNumber}`;
              } else {
                navigator.clipboard.writeText(
                  clickedButton?.modal_content || ""
                );
                setIsCopied(true);
              }
            }}
          >
            {clickedButton?.modal_content || ""}
            {isCopied ? (
              <div
                style={{
                  color: "green",
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Copied to clipboard <IoCheckmarkDoneOutline />{" "}
              </div>
            ) : null}
          </div>
        </ModalComponent>
      ) : null}

      {isModalOpen && clickedButton?.action_type !== "CALL" ? (
        <ModalComponent
          onClose={() => {
            setIsModalOpen(false);
            setClickedButton({});
          }}
          title={clickedButton?.modal_title || ""}
        >
          <div
            className="zithara-widget-call-modal-content"
            style={{ color: clickedButton?.modal_content_color || "black" }}
          >
            {clickedButton?.modal_content || ""}
          </div>
        </ModalComponent>
      ) : null}
      <div
        className={`zithara-widget-container ${
          isOpen ? "zithara-widget-container-open" : ""
        }`}
        ref={widgetRef}
      ></div>
      {isTooltipOn && (
        <div className="zithara-widget-toggle-button-tootlip" style={mapTooltipStyleFromConfig(mainButtonConfig, isOpen)}>
          <p>{mainButtonConfig?.tooltip || "How can I help you?"}</p>
          <div onClick={() => setIsTooltipOn(false)}>
            <IoClose className="" />
          </div>
        </div>
      )}
      <div style={{ position: "relative" }}>
        <div
          className={`zithara-widget-buttons-container ${
            isOpen
              ? "zithara-widget-buttons-container-open"
              : "zithara-widget-buttons-container-closed"
          }`}
          style={mapListContainerStyleFromConfig(mainButtonConfig)}
        >
          {isOpen &&
            buttonsData.map((button, index) => (
              <div
                className="zithara-widget-button"
                key={index}
                onClick={() => handleButtonClick(button)}
                style={mapListButtonStyleFromConfig(button)}
              >
                <>{getIcon(button?.icon, button)}</>
                <p style={{ margin: 0, color: button?.text_color || "white" }}>
                  {button.button_label}
                </p>
              </div>
            ))}
        </div>
        <button
          onClick={toggleWidget}
          className={`zithara-widget-toggle-button ${
            isOpen
              ? "zithara-widget-toggle-button-open"
              : "zithara-widget-toggle-button-closed"
          }`}
          style={mapToggleButtonStyleFromConfig(mainButtonConfig, isOpen)}
          title={mainButtonConfig.tooltip}
        >
          {isOpen ? (
            <IoClose className="zithara-widget-icon" />
          ) : (
            <>
              {mainButtonConfig?.icon ? null : (
                <BiSupport className="zithara-widget-icon" />
              )}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default HelpWidget;

const mapToggleButtonStyleFromConfig = (config, isOpen) => {
  let style = {
    backgroundColor: config.background_color,
    hoverBackgroundColor: config.hover_background_color,
    height: config?.height || "5rem",
    width: config?.width || "5rem",
  };

  if (config?.position && config.position.type) {
    if (config.position.type === "bottom-left") {
      style = {
        ...style,
        left: config.position.left || "20px",
        bottom: config.position.bottom || "20px",
      };
    }
    if (config.position.type === "bottom-right") {
      style = {
        ...style,
        right: config.position.right || "20px",
        bottom: config.position.bottom || "20px",
      };
    }
  }

  if (config?.icon && !isOpen) {
    style = {
      ...style,
      backgroundImage: `url(${config.icon})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }

  return style;
};

const mapListContainerStyleFromConfig = (config) => {
  let style = {};
  if (config?.position && config?.position.type) {
    if (config?.position?.type === "bottom-left") {
      style = {
        left: config?.left || "1.25rem",
        bottom: `calc(${config?.height || "5rem"} + 2rem)`,
      };
    }
    if (config?.position?.type === "bottom-right") {
      style = {
        right: config?.right || "1.25rem",
        bottom: `calc(${config?.height || "5rem"} + 2rem)`,
      };
    }
  }
  return style;
};

const mapListButtonStyleFromConfig = (config) => {
  let style = {
    backgroundColor: config?.background_color || "#014ea0",
    color: config?.text_color || "white",
    cursor: config?.disabled ? "not-allowed" : "pointer",
    opacity: config?.disabled ? 0.7 : 1,
  };
  return style;
};

const mapTooltipStyleFromConfig = (config, isOpen) => {
  let style = {
  };
  if (config?.position && config?.position?.type) {
    if (config?.position?.type === "bottom-left") {
      style = {
        ...style,
        left: config?.left || "1.25rem",
        bottom: `calc(${config?.height || "5rem"} + 2rem)`,
      };
    }
    if (config?.position?.type === "bottom-right") {
      style = {
        ...style,
        right: config?.right || "1.25rem",
        bottom: `calc(${config?.height || "5rem"} + 2rem)`, 
      };
    }
  }
  return style;
};

module.exports = {
  mapToggleButtonStyleFromConfig,
  mapListContainerStyleFromConfig,
  mapListButtonStyleFromConfig,
  mapTooltipStyleFromConfig
};

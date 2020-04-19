function getScreenWidth(screenType, mobileWidth, tabWidth, desktopWidth) {
  if (screenType === "mobile") {
    return mobileWidth;
  }
  if (screenType === "tablet") {
    return tabWidth;
  }
  return desktopWidth;
}

function getScreenHeight(screenType, mobileHeight, tabHeight, desktopHeight) {
  if (screenType === "mobile") {
    return mobileHeight;
  }
  if (screenType === "tablet") {
    return tabHeight;
  }
  return desktopHeight;
}

export { getScreenWidth, getScreenHeight };

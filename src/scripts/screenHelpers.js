let screenSize = window.innerWidth;

const handleResize = () => {
  screenSize = window.innerWidth;
};

const addResizeListener = () => window.addEventListener('resize', handleResize);
const removeResizeListener = () => window.removeEventListener('resize', handleResize);
const getScreenSize = () => screenSize;
const isMobile = () => screenSize < 1023;

// New function to update and return mobile status
const updateMobileStatus = () => isMobile();

export { addResizeListener, removeResizeListener, getScreenSize, isMobile, updateMobileStatus };

import { useEffect, useState } from 'react';
import { verifyBrowser } from '../helpers/verifyBrowser';
import { analyzeDeviceByUserAgent } from '../helpers/analyzeDeviceByUserAgent';

export const getServerSideProps = async (context) => {
  const userAgent = context.req.headers['user-agent'];

  const { isMobile, isTablet, isDesktop } = analyzeDeviceByUserAgent(userAgent);

  return {
    props: {
      isMobile,
      isTablet,
      isDesktop,
    },
  };
};

const Blog = (props) => {
  const { isMobile, isTablet, isDesktop } = props;

  const [isDesktopHd, setDesktopHd] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setDesktopHd(true);
    }
  });

  const isBrowser = verifyBrowser();
  if (isBrowser) {
    console.log('width ', window.innerWidth);
  }

  const mobileJSX = isMobile && <p>Mobile</p>;

  const tabletJSX = isTablet && <p>Tablet</p>;

  const hdJSX = isDesktopHd && <span>HD</span>;

  const desktopJSX = isDesktop && <p>Desktop{hdJSX}</p>;

  return (
    <>
      {mobileJSX}
      {tabletJSX}
      {desktopJSX}
    </>
  );
};

export default Blog;

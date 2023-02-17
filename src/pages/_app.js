import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import 'util/analytics';
import { ThemeProvider, StyledEngineProvider } from 'util/theme';

// import IndexPage from './index';
// import AboutPage from './about';
// import ResumeCvPage from './resume-cv';
// import ContactPage from './contact';
// import NotFoundPage from './404';

const logo = Object.freeze('https://uploads.divjoy.com/logo.svg');
const logoInverted = Object.freeze('https://uploads.divjoy.com/logo-white.svg');

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <Navbar color="default" logo={logo} logoInverted={logoInverted} />
        <Component {...pageProps} />
        <Footer
          bgColor="light"
          size="normal"
          bgImage=""
          bgImageOpacity={1}
          description="Personal Website for Keith Stolte"
          copyright={`© ${new Date().getFullYear()} Keith Stolte`}
          logo={logo}
          logoInverted={logoInverted}
          sticky={true}
        />
      </>
    </ThemeProvider>
  );
}

export default MyApp;

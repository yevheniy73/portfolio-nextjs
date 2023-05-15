import { Navbar, Footer } from '../components';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </head>
    <body>
      <div id='portfolio' className='flex flex-col justify-between'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;

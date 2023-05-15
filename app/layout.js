import { Navbar, Footer } from '../components';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-dark.min.css" />
      </head>
    <body>
      <div id='portfolio' className='flex flex-col justify-between'>
        <Navbar />
        {children}
        <Footer />
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>
    </body>
  </html>
);

export default RootLayout;

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  )
}

export default MyApp

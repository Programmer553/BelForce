import Layout from './components/layout/Layout';
import AppRoutes from './routes';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;

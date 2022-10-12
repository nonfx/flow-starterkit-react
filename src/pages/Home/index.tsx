import BodySection from '../../components/BodySection/BodySection';
import Layout from '../../components/Layout/Layout';

function HomePage() {
    return (
        // Layout for top-bar and side-bar. Click cmd/ctrl + Click to navigate to the component
        <Layout>
            {/* BodySection used as a children inside Layout, which contains the data to be displayed in body. Click cmd/ctrl + click to navigate to the component */}
            <BodySection></BodySection>
        </Layout>
    );
}

export default HomePage;

import BodySection from '../../components/BodySection/BodySection';
import Layout from '../../components/Layout/Layout';

function HomePage() {
    return (
        // Layout for top-bar and side-bar
        <Layout>
            {/* BodySection used as a children inside Layout, which contains the data to be displayed in body */}
            <BodySection></BodySection>
        </Layout>
    );
}

export default HomePage;

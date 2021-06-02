/* Components */
import { Cars, Discounts, News } from '../components';

/* Instruments */
import { countUserVisits } from '../helpers/countUserVisits';
import { getData } from '../helpers/getData';

const Dashboard = ({ newsData, discountsData, carsData }) => (
    <section className='container'>
        <News title='News' data={newsData} />
        <Discounts title='Discounts' data={discountsData} />
        <Cars title='Cars' data={carsData} />
    </section>
);

export const getServerSideProps = async (context) => {
    const visitCounts = await countUserVisits(context);

    const { newsData, discountsData, carsData } = await getData(visitCounts);

    return {
        props: {
            newsData,
            discountsData,
            carsData,
        },
    };
};

export default Dashboard;

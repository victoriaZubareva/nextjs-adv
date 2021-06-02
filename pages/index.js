/* Instruments */
import { countUserVisits } from '../helpers/countUserVisits';
import { Greeting } from '../components/Greeting';

const Index = ({ visitCounts }) => <Greeting visitCounts={visitCounts} />;

export const getServerSideProps = async (ctx) => {
    const visitCounts = await countUserVisits(ctx);

    return {
        props: { visitCounts },
    };
};

export default Index;

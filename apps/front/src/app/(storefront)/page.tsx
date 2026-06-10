import { Hero } from '@/features/home/components/Hero/Hero';
import { Text } from '@/shared/components/Text';

const Home = () => (
    <>
        <Hero />
        <section className="mx-auto max-w-7xl px-4 py-16">
            <Text variant="title">Articles</Text>
        </section>
    </>
);

export default Home;

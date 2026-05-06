import { brand } from '@/config/brand';

const Home = () => (
    <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl">{brand.name}</h1>
    </main>
);

export default Home;

import { Hero } from '@/features/home/components/Hero/Hero';
import { productsMock } from '@/features/products/api/productMock';
import { ProductCard } from '@/features/products/components/ProductCard/ProductCard';
import { Text } from '@/shared/components/Text';

const Home = () => (
    <>
        <Hero />
        <section id="produits" className="mx-auto max-w-7xl px-4 py-16">
            <Text variant="title">Articles</Text>
            <div className="mt-8 grid grid-cols-2 gap-6">
                {productsMock.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    </>
);

export default Home;

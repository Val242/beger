
import FeaturedProducts from "@/components/FeaturedProducts";
import { groupedProducts } from "@/data/featuredProducts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const products = groupedProducts.filter(
    (item) => item.slug === slug
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mr-6">{slug}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 mx-6">
        {products.map((product) => (
                <div key={product.id}>
                  <FeaturedProducts
                    image={product.image}
                    description={product.description}
                  />
                </div>
        ))}
      </div>
    </div>
  );
}
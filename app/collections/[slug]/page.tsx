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

  //good
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10">
      
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 sm:mt-6">
        {slug}
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6">
        
        {products.map((product) => (
          <div key={product.id} className="w-full">
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
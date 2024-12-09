import { cookies } from 'next/headers';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export default async function ProductsPage() {
  // Fetch details for a specific product
  // note that this subsequent fetch will NOT be cached due to cache: 'no-store' above
  // to test - place this before the /products no-store fetch
  const detailsResponse = await fetch('http://localhost:3001/products/1');
  const details = await detailsResponse.json();

  // now note that the /products route will be cached because it is after a dynamic function e.g. cookies(), headers() or searchParams
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const response = await fetch('http://localhost:3001/products', {
    cache: 'no-store',
  });

  //   const response = await fetch('http://localhost:3001/products', {
  //     cache: 'no-store',
  //   });
  const products = await response.json();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product: Product) => (
          <div
            key={product.id}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-green-600 font-bold mb-3">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600">{product.description}</p>
            <p>{details?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

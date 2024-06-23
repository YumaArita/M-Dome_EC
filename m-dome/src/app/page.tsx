const Home = () => {
  // ダミーデータ
  const popularProducts = [
    { id: 1, name: "Product 1", description: "Description 1" },
    { id: 2, name: "Product 2", description: "Description 2" },
    { id: 3, name: "Product 3", description: "Description 3" },
  ];

  const fairProducts = [
    { id: 1, name: "Fair Product 1", description: "Fair Description 1" },
    { id: 2, name: "Fair Product 2", description: "Fair Description 2" },
    { id: 3, name: "Fair Product 3", description: "Fair Description 3" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Welcome to M-Dome Tennis School
      </h1>
      <p className="text-lg mb-4">
        Your journey to becoming a tennis pro starts here.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Fair Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fairProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

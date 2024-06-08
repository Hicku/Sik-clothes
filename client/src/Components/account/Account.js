import Product from "../productCard/Product";

function Account({ recentlyViewed }) {
  return (
    <div>
      <section className="recently-viewed-container">
        <h2>Recently Viewed</h2>
        <ul>
          {recentlyViewed.map((product) => (
            <li key={product._id}>
              <Product product={product} />
            </li>
          ))}
          hello
        </ul>
      </section>
      <section className="wish-list-container"></section>
    </div>
  );
}

export default Account;

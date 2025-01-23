import AllProductsSection from '../AllProductsSection'
import Footer from '../Footer'
import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <AllProductsSection />
    </div>
    <Footer />
  </>
)

export default Products

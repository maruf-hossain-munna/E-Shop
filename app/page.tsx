import Container from './components/container/Container'
import HomeBanner from './components/homeBanner/HomeBanner'
import OfferDetails from './components/homeBanner/OfferDetails'
import ProductCard from './components/products/ProductCard'
import { products } from './utils/products'

export default function Home() {
  return (
    <div className='mt-12'>
      <Container>
        <div className='mb-20'>
          <HomeBanner />
          <OfferDetails />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12'>
          {products.map((product: any) => {
            return <ProductCard data={product} key={product.id} />
          })}
        </div>
      </Container>
    </div>
  )
}

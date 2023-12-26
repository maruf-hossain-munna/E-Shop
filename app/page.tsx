import Container from './components/container/Container'
import HomeBanner from './components/homeBanner/HomeBanner'
import ProductCard from './components/products/ProductCard'
import { products } from './utils/products'
import { truncateText } from './utils/truncate'

export default function Home() {
  return (
    <div className='mt-12'>
      <Container>
        <div>
          <HomeBanner />
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {products.map((product: any) => {
            return <ProductCard data={product} key={product.id} />
          })}
        </div>
      </Container>
    </div>
  )
}

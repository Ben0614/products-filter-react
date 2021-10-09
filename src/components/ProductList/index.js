import React from 'react'
import ProductItem from './ProductItem'

function ProductList(props) {
  const { displayProducts } = props

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {displayProducts.map((v, i) => {
              return <ProductItem product={v} />
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList

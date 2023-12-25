import React from "react";

interface IProductsInline {
  data: Product[];
  array: number[];
}

const ProductsInline: React.FC<IProductsInline> = (
  {
    data,
    array = []
  }
)=> {
  return (
    <div className="products-inline">

      {
        array.map((item) => {
          return (
            <img 
              src={data[item].image}
              alt={data[item].name}
              onClick={() => {
                window.location.href = 
                `loja/produto/${data[item].id}`
              }}/>
          )
        })
      }
    </div>
  )
}

export default ProductsInline
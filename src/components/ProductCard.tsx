import star from '../assets/star-30.png'

interface ProductCardProps {
  image: any;
  title: string;
  productId: number,
  desc?: string;
  prevPrice?: number | null;
  price: number;
  stars?: number;
}

const ProductCard: React.FC<ProductCardProps> = 
  (
    {
      image,
      title = "",
      productId,
      desc = "",
      prevPrice = null,
      price,
      stars = 0
    }
  ) => {
    return (
    <div className="productCard" data-id={productId}>
        <div className="image-box">
          <img src={image}/>
        </div>
        <div className="content-box">
          <h2>{title}</h2>
          <p className='desc'>{desc}</p>
          <div className="review-box">
            <p>
              <img src={star} alt='null'/>
              {stars}
            </p>
          </div>
          <div className="price-box">
              
              {prevPrice && (
                <span>{prevPrice}</span>
              )}
              
            <p className="price">{
              price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL"
              })}
            </p>
          </div>
        </div>
      </div>
  )
}

export default ProductCard
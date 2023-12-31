import star from '../assets/star-100.png';

interface ProductCardProps {
  // eslint-disable-next-line
  image: any;
  title: string;
  productId: number,
  desc?: string;
  prevPrice?: number | null;
  price: number;
  stars?: number;
  onClick?: () => void;
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
      stars = 0,
      onClick,
      ...props
    }
  ) => {
    return (
    <div 
      className="productCard"
      data-id={productId}
      onClick={onClick}
      {...props}
    >
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

export default ProductCard;
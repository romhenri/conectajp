interface RequestCardProps {
  // eslint-disable-next-line
  image: any;
  title: string;
  productId: number,
  desc?: string;
  prevPrice?: number | null;
  price?: number;
  stars?: number;
}

const RequestCard: React.FC<RequestCardProps> = 
  (
    {
      image,
      title = "",
      productId,
      desc = "",
    }
  ) => {
    return (
    <div className="productCard request-card" data-id={productId}>
        <div className="image-box">
          <img src={image}/>
        </div>
        <div className="content-box">
          <h2>{title}</h2>
          <p className='desc'>{desc}</p>
          <div className="status-box">
            <div className='active'></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
  )
};

export default RequestCard;
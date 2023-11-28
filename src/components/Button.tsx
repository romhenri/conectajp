type IButton = {
  text: string,
  bg?: string,
  className?: string,
  onClick?: any
}

const Button = ({ text, bg, className, onClick }: IButton) => {
	// const handleClick = onClick ? onClick : () => console.log("Sem Função!");

	const handleClick = () => {
		if (onClick === null) {

   	} else if (onClick) {
			onClick();

		} else {
			// console.log(typeof(onClick));
      console.log("Sem Função Específica!");
    }
  };

	return (
		<button
			onClick={handleClick}
			style={{ backgroundColor: bg }}
			className={className}
		>
			{text}
		</button>
	)
}

export default Button;
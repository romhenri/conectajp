import styled from "styled-components";

type IButton = {
  text: string,
  bg?: string,
  className?: string,
  onClick?: any
}

const Btn = styled.button`
	padding: 10px;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  font-family: 'Maven Pro', sans-serif;
  font-weight: 500;
  cursor: pointer;
  background-color:  #74e2a2;
  color: #0000009a;
`

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
		<Btn
			onClick={handleClick}
			style={{ backgroundColor: bg }}
			className={className}
		>
			{text}
		</Btn>
	)
}

export default Button;
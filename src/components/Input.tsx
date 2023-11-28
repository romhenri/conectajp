type IInput = {
  type: string,
  label: string,
  id?: string,
  placeholder?: string
}

const Input = ({ type, label, id, placeholder, ...props}: IInput) => {
	return (
		<>
			<label htmlFor={id}>
				{label}
				<input
					id={id}
					type={type ? type : 'text'}
					placeholder={placeholder}
					{...props}
				/>
			</label>
		</>
	)
}

export default Input;
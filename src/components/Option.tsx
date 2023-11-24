import { MouseEvent } from 'react'
import styled from 'styled-components'

const OptionDiv = styled.div`
 box-sizing: border-box;
  height: 50px;
  background-color: rgba(240, 248, 255, 0.55);
  padding: 14px;
  margin-bottom: 8px;
  border-radius: 10px;
  cursor: pointer;

  &:active {
  scale: .96;
  transition: .2s;
  filter: brightness(90%);
}
`

type IOption = {
  title: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Option = ({title, ...props}: IOption) => {
  return (
    <OptionDiv {...props}>
      {title}
    </OptionDiv>
  )
}

export default Option
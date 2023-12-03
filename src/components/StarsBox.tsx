import styled from 'styled-components'
import icon_star from '../assets/star-100.png'
import icon_0 from '../assets/star-0.png'
import icon_25 from '../assets/star-25of100.png'
import icon_35 from '../assets/star-35of100.png'
import icon_50 from '../assets/star-50of100.png'
import icon_75 from '../assets/star-75of100.png'

const StyledStar = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px;
`

type IStarsBox = {
  starsNumber: number | undefined;
}

function getStars(number: number) {
  if (!number) return;
  const starsArray = [];
  const numberFullStars = Math.trunc(number);
  const lastStar = Number(Math.abs(number % 1).toFixed(1));

  for(let i = 0; i < numberFullStars; i++) {
    starsArray.push((
      <StyledStar src={icon_star} key={i}/>
    ));
  };
  // It s nescery to add a key to the last star, because the react demands unique keys to all
  const lastKey = numberFullStars + 1;
  
  if (lastStar <= .1){
    starsArray.push((
      <StyledStar src={icon_0} key={lastKey}/>
    ));
  } else if (lastStar <= .2) {
    starsArray.push((
      <StyledStar src={icon_25} key={lastKey}/>
    ));
  } else if (lastStar <= .3) {
    starsArray.push((
      <StyledStar src={icon_35} key={lastKey}/>
    ));
  } else if (lastStar <= .6) {
    starsArray.push((
      <StyledStar src={icon_50} key={lastKey}/>
    ));
  } else if (lastStar <= .8) {
    starsArray.push((
      <StyledStar src={icon_75} key={lastKey}/>
    ));
  };

  return starsArray;
}

const StarsBox = ({starsNumber}: IStarsBox) => {
  if (typeof starsNumber !== 'number') return;

  return (
    <>
      <span>
        {
          starsNumber
        }
      </span>
      <div>
        {
          getStars(starsNumber)
        }
      </div>
    </>
  )
}

export default StarsBox;
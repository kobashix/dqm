import card from '../../constants/index'

const Card = () => {
  return (
    <div>
        <div>
            <div>
                <img 
                src={card[0].icon} 
                alt="" 
                width={50}
                />
            </div>
        </div>
    </div>
  )
}

export default Card
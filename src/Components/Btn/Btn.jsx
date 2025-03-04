import './Btn.css'

function Btn({handleToCard, product}){
    return(
        <button onClick={() => handleToCard(product)}>Buy</button>
    )
}

export default Btn

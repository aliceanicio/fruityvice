import { Button } from "@material-ui/core";
import { CartItemType } from "../App";
import { Wrapper } from "../App.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.name} />
    <div>
      <h3>{item.name}</h3>
      <p>Calorias: {item.calories}</p>
      <h3>R${item.protein}</h3>
    </div>
    <button onClick={() => handleAddToCart(item)}>Adicionar ao carrinho</button>
  </Wrapper>
)

export default Item;
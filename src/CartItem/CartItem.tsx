import Button from "@material-ui/core/Button";

import { CartItemType } from "../App";

import { Wrapper } from "../App.styles";
import Item from "../Item/item";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart}) => (
  <Wrapper>
    <div>
      <h3>{Item.name}</h3>
      <div className="information">
        <p>Preço: R${item.protein}</p>
        <p>Total: R${(item.amount * item.protein).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.name} />
  </Wrapper>
)

export default CartItem; 
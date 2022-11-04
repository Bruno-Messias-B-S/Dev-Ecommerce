import * as C from './styles';
import { TiShoppingCart } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { openModal } from '../../features/modalSlice/modal';

export const NavBar = () => {
    const totalQuantity = useSelector((state: RootState) => state.cartItems.cartItemsQtd);

    const dispatch = useDispatch()

    return (
        <C.Container>
            <C.Logo>
                <C.Dev>
                    <h3 className="dev">Dev</h3>
                </C.Dev>

                <C.Ecommerce>
                    <h5 className="ecommerce">E-Commerce</h5>
                </C.Ecommerce>
            </C.Logo>
            
            <C.Carrinho data-testid={'modal'} onClick={() => dispatch(openModal())}>
                <C.CarrinhoImg>
                    <TiShoppingCart className="carrinho" size={21} />
                </C.CarrinhoImg>

                <C.ItemsQtd>
                    <p data-testid={'totalQtd'}>{totalQuantity}</p>
                </C.ItemsQtd>
            </C.Carrinho>
        </C.Container>
    );
}
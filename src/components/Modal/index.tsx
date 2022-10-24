import * as C from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../store';
import { AiFillCloseCircle, AiOutlineClose } from 'react-icons/ai';
import { closeModal } from '../../features/modalSlice/modal';
import { increase, decrease, removeItem, getTotals } from '../../features/cartSlice/cart';

export const Modal = () => {
    const modalClose = useSelector((state: RootState) => state.modalSlice.isOpen);
    const cartItems = useSelector((state: RootState) => state.cartItems.cartItems);
    const totalValue = useSelector((state: RootState) => state.cartItems.totalValue);

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getTotals())
    },[cartItems])

    return (
        <>
        {modalClose &&
            <C.CartOpen>
                <C.Title>
                    <h3>Carrinho<br/> de Compras</h3>
                    <AiFillCloseCircle className="icon" size={40} color={'black'} onClick={() => dispatch(closeModal())}></AiFillCloseCircle>
                </C.Title>

                <C.ItensContainer>
                    {cartItems.map((item, index) => (
                        <C.Itens key={index}>
                            <C.Imagem>
                                <div><AiOutlineClose className="closeBtnMobile" onClick={() => dispatch(removeItem((item.id)))}/></div>
                                <div><AiFillCloseCircle className="closeBtn" onClick={() => dispatch(removeItem((item.id)))}/></div>
                                <img src={`${item.photo}`} />
                            </C.Imagem>

                            <C.ItemTitle>
                                <p>{item.name}</p>
                            </C.ItemTitle>

                            <C.ControllerAndPrice>
                                <C.QuantityController>
                                    <p>Qtd:</p>
                                    <div>
                                        <button onClick={() => dispatch(decrease(item))}>-</button>
                                        <span>{item.amount}</span>
                                        <button onClick={() => dispatch(increase(item))}>+</button>
                                    </div>
                                </C.QuantityController>

                                <C.Price>
                                    <p>R${Number(item.price).toLocaleString('pt-BR')}</p>
                                </C.Price>
                            </C.ControllerAndPrice>
                        </C.Itens>
                    ))}
                </C.ItensContainer>

                <C.TotalFinalizar>
                    <C.Total>
                        <div>
                            <h5>Total:</h5>
                            <span>R$ {totalValue.toLocaleString('pt-BR')}</span>
                        </div>
                    </C.Total>

                    <C.Finalizar>
                        <button>Finalizar Compra</button>
                    </C.Finalizar>
                </C.TotalFinalizar>
            </C.CartOpen>
        }
        </>
    );
}
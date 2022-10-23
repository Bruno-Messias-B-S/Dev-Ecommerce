import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from '../../store'
import { Comprar } from "./styles";

test('should add to cart', () => {
    const addToCart = jest.fn()

    render(<Provider store={store}><Comprar onClick={addToCart}></Comprar></Provider>);

    expect(addToCart).toBeCalled
})
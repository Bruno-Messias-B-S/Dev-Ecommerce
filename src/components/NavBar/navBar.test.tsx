import { NavBar } from '.';
import { render } from '@testing-library/react';
import { store } from '../../store'
import { Provider } from 'react-redux'
import { Carrinho } from './styles';

describe('total quantity', () => {
    it ('should display 0 at first', () => {
        const { getByTestId } = render(<Provider store={store}><NavBar /></Provider>);

        expect(getByTestId('totalQtd').textContent).toBe(("0"));
    })
});

describe('<C.Carrinho />', () => {
    it ('should open modal', () => {
        const modalOpen = jest.fn()

        render(<Provider store={store}><Carrinho onClick={modalOpen}></Carrinho></Provider>);
        
        expect(modalOpen).toBeCalled
    })
});
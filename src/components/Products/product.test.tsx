import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from '../../store'
import { Comprar, Desc, NamePrice, ProductPhoto } from "./styles";

describe('<C.ProductPhoto>', () => {
    it('should display an image', () => {
        const { container } = render(<Provider store={store}><ProductPhoto></ProductPhoto></Provider>);
    
        const img = container.getAttribute('img')
        expect(img).toBeInTheDocument
    })
})

describe('<C.NamePrice>', () => {
    it('should display the name and price', () => {
        const { container } = render(<Provider store={store}><NamePrice></NamePrice></Provider>);
    
        const nameAndPrice = container.getAttribute('p')
        expect(nameAndPrice).toBeInTheDocument
    })
})

describe('<C.Desc>', () => {
    it('should display the description', () => {
        const { container } = render(<Provider store={store}><Desc></Desc></Provider>);
    
        const p = container.getAttribute('p')
        expect(p).toBeInTheDocument
    })
})

describe('<C.Comprar>', () => {
    it('should add to cart', () => {
        const addToCart = jest.fn()
    
        render(<Provider store={store}><Comprar onClick={addToCart}></Comprar></Provider>);
    
        expect(addToCart).toBeCalled
    })
})

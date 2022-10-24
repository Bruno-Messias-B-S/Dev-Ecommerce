import { render } from "@testing-library/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Provider } from "react-redux";
import { store } from "../../store";

test('should close modal', () => {
    const modalClose = jest.fn()

    render(<Provider store={store}><AiFillCloseCircle onClick={modalClose}></AiFillCloseCircle></Provider>);
        
    expect(modalClose).toBeCalled
})
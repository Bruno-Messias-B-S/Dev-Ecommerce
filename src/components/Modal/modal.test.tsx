import { render } from "@testing-library/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Provider } from "react-redux";
import { store } from "../../store";

test('should close modal', () => {
    const closeModal = jest.fn()

    render(<Provider store={store}><AiFillCloseCircle onClick={closeModal}/></Provider>);

    expect(closeModal).toBeCalled
})
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);
  
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
  
    // const firstNameInput1 = render.getByLabelText(/firstName/i);
    // const lastNameInput1 = render.getByLabelText(/lastName/i);
    // const addressInput1 = render.getByLabelText(/address/i);
    // const cityInput1 = render.getByLabelText(/city/i);
    // const stateInput1 = render.getByLabelText(/state/i);
    // const zipInput1 = render.getByLabelText(/zip/i);



    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
  
    fireEvent.change(firstNameInput, { target: { value: 'itachi' } });
    fireEvent.change(lastNameInput, { target: { value: 'uchiha' } });
    fireEvent.change(addressInput, { target: { value: '555 leaf village' } });
    fireEvent.change(cityInput, { target: { value: 'kanoha' } });
    fireEvent.change(stateInput, { target: { value: 'japan' } });
    fireEvent.change(zipInput, { target: { value: '13579' } });
    
    
   

});

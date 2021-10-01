import { render, act, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FormInput from '../FormInput'

describe("Form Input Component", () => {

    it("renders input", () => {
        const { getByTestId } = render(<FormInput />)
        const input = getByTestId("formInput")

        expect(input).toBeInTheDocument()
    })


    /* FORM INPUT VALUE VALIDATION TESTS - WIP */
    /* it("Invalid first name input", async () => {
        const {getByLabelText, container} = render(
            <FormInput 
                id="firstName" 
                name="firstName" 
                label="First name"
            />
        )
        const firstNameInput = getByLabelText("First name")
        
        await act(async () => {
            fireEvent.change(firstNameInput, {target: {value: ""}})
            fireEvent.blur(firstNameInput)
        })

        expect(screen.getByRole("errorMsg")).toBe(1)
    })

    it("Invalid last name input", async () => {
        const {getByLabelText, container} = render(
            <FormInput 
                id="lastName" 
                name="lastName" 
                label="Last name"
            />
        )
        const lastNameInput = getByLabelText("Last name")
        
        await act(async () => {
            fireEvent.change(lastNameInput, {target: {value: ""}})
            fireEvent.blur(lastNameInput)
        })

        expect(container.innerHTML).toMatch("Last name is required")
    })

    it("Invalid email input", async () => {
        const {getByLabelText, container} = render(
            <FormInput 
                id="email" 
                name="email" 
                label="Email"
            />
        )
        const emailInput = getByLabelText("Email")
        
        await act(async () => {
            fireEvent.change(emailInput, {target: {value: "123432423.asdfsdf"}})
            fireEvent.blur(emailInput)
        })

        expect(container.innerHTML).toMatch("Invalid email address")
    })

    it("Valid email input", async () => {
        const {getByLabelText, container} = render(
            <FormInput 
                id="email" 
                name="email" 
                label="Email"
            />
        )
        const emailInput = getByLabelText("Email")
        
        await act(async () => {
            fireEvent.change(emailInput, {target: {value: "jamesconnor@testmail.com"}})
        })

        expect(emailInput.value).toBe("jamesconnor@testmail.com")
    })

    it("Invalid date input", async () => {
        const {getByLabelText, container} = render(
            <FormInput 
                id="date" 
                name="date" 
                label="Date"
            />
        )
        const dateInput = getByLabelText("Date")
        
        await act(async () => {
            fireEvent.change(dateInput, {target: {value: ""}})
            fireEvent.blur(dateInput)
        })

        expect(screen.getByRole("errorMsg")).toHaveLength()
    })

    it("Valid date input", async () => {
        const {getByLabelText, container} = render(
            <FormInput 
                id="date" 
                name="date" 
                label="Date"
                error="Date is required"
            />
        )
        const dateInput = getByLabelText("Date")
        
        await act(async () => {
            fireEvent.change(dateInput, {target: {value: ""}})
        })

        expect(container.innerHTML).toMatch("Date is required")
    }) */

})
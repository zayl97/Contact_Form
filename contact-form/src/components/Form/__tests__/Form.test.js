import { render, fireEvent, screen, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from '../Form'

describe("Form Component", () => {

    it("renders form", () => {
        const {getByTestId} = render(<Form />)
        const form = getByTestId("form")

        expect(form).toBeInTheDocument()
    })

    it("displays errors on submit when values are invalid", async () => {
        render(<Form />)

        await act( async () => {
            fireEvent.submit(screen.getByTestId("submitBtn"))
        })
    
        expect(await screen.findAllByRole("errorMsg")).toHaveLength(4)
    })


    /* SUBMIT VALIDATION - WIP */
    /* it("Don't display errors on submit when values are valid", async () => {
        const mockSubmit = jest.fn();
        const {getAllByTestId} = render(<Form onSubmit={mockSubmit} />)
        const formInput = getAllByTestId("formInput")

        await act( async () => {
            fireEvent.change(formInput[0], {
                target: {
                    value: 'James'
                }
            })

            fireEvent.change(formInput[1], {
                target: {
                    value: 'Connor'
                }
            })

            fireEvent.change(formInput[2], {
                target: {
                    value: 'jamesconnor@testmail.com'
                }
            })

            fireEvent.change(formInput[3], {
                target: {
                    value: '2021-09-30'
                }
            })
            
            fireEvent.submit(screen.getByTestId("submitBtn"))
        })
        
        await waitFor(() =>
            expect(mockSubmit).toHaveBeenCalledWith({
                formInput: ["James", "Connor", "jamesconnor@testmail.com", "2021-09-30"]
            }),
            expect(await screen.findAllByRole("errorMsg")).toHaveLength(0)
        );
    }) */

})
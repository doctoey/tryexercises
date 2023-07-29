import { act, findByText, fireEvent, queryByText, render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';

describe("App Component", () => {
    it("should render Maria Anders as random name", () => {
        render(<App />)
        jest.spyOn(Math, 'floor').mockReturnValue(1);

        //ACT
        const increaseButton = screen.getByText(/Random Button/)
        act(() => {
            fireEvent.click(increaseButton)
            increaseButton.click()
        })

        // screen.debug()
        expect(screen.getByText(/Random name : Maria Anders/)).toBeInTheDocument();
        expect(screen.getByText(/Alfreds Futterkiste/)).toBeInTheDocument();
        expect(screen.getByText(/Germany/)).toBeInTheDocument();
        // expect(screen.findByText(/Random country : Germany/))
        // expect(screen.getByText(/Random name : Roland Mendel/)).toBeInTheDocument()
        // screen.getByText(/Ernst Handel/)
        // findByText
        // queryByText

    })
})

describe("App Component", () => {
    it("should render Roland Mendel as random name", () => {
        render(<App />)
        jest.spyOn(Math, 'floor').mockReturnValue(0);

        //ACT
        const increaseButton = screen.getByText(/Random Button/)
        act(() => {
            fireEvent.click(increaseButton)
            increaseButton.click()
        })

        // screen.debug()     
        expect(screen.getByText(/Random name : Roland Mendel/)).toBeInTheDocument();
        expect(screen.getByText(/Ernst Handel/)).toBeInTheDocument();
        expect(screen.getByText(/Austria/)).toBeInTheDocument();

    })
})

describe("App Component", () => {
    it("should render Francisco Chang as random name", () => {
        render(<App />)
        jest.spyOn(Math, 'floor').mockReturnValue(2);

        //ACT
        const increaseButton = screen.getByText(/Random Button/)
        act(() => {
            fireEvent.click(increaseButton)
            increaseButton.click()
        })

        // screen.debug()
        expect(screen.getByText(/Random name : Francisco Chang/)).toBeInTheDocument();
        expect(screen.getByText(/Centro comercial Moctezuma/)).toBeInTheDocument();
        expect(screen.getByText(/Mexico/)).toBeInTheDocument();

    })
})


// import { act, render, screen } from '@testing-library/react';
// import { IntroToComponentTesting } from './index';
// import React from 'react';

// describe('IntroToComponentTesting Component', () => {
//     it('should render Maria Anders as random name', () => {
//         jest.spyOn(Math, 'random').mockReturnValue(0);

//         render(<IntroToComponentTesting />);
//         const increaseButton = screen.getByText(/Random Button/);

//         // Click the "Random Button" twice to set randomName to "Maria Anders"
//         act(() => {
//             increaseButton.click();
//             increaseButton.click();
//         });

//         // Print the component's HTML structure to the console for debugging
//         console.log(screen.debug());

//         // Check if the component displays the correct data for "Maria Anders"
//         expect(screen.getByText(/Random name : Maria Anders/)).toBeInTheDocument();
//         expect(screen.getByText(/Alfreds Futterkiste/)).toBeInTheDocument();
//         // expect(screen.getByText(/Maria Anders/)).toBeInTheDocument();
//         expect(screen.getByText(/Germany/)).toBeInTheDocument();
//     });
// });

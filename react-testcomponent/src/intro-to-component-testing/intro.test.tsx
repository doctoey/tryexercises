import { act, findByText, fireEvent, queryByText, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import React from 'react';
import { IntroToComponentTesting } from './index'
import axios from 'axios';

describe("App Component", () => {
    it("yeahh", async () => {
        const response = { data: [
            { id: 1, amountIncome: 35000.52, taxPaid:2519, totalWorkDays:20 },
        ] };
        jest.spyOn(axios, 'get').mockResolvedValue(response);

        render(<IntroToComponentTesting />);

        // You may need to wait for the content to appear using `waitFor`
        await waitFor(() => expect(screen.queryByText(/35000.52/)).toBeInTheDocument());

    })
})
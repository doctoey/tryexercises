import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(cors<Request>())
app.get('/worklogs', (req: Request, res: Response) => {
  const sampleData = [
    {
      "amountIncome": 35000.52,
      "taxPaid": 2519.00,
      "totalWorkDays": 20,
      "createdAt": "2023-01-24T10:00:00.499"
    },
    {
      "amountIncome": 35000.52,
      "taxPaid": 2519.00,
      "totalWorkDays": 20,
      "createdAt": "2023-02-24T10:00:00.499"
    },
    {
      "amountIncome": 20000.33,
      "taxPaid": 1400.55,
      "totalWorkDays": 13,
      "createdAt": "2023-03-24T10:00:00.499"
    },
    {
      "amountIncome": 35000.33,
      "taxPaid": 2700.44,
      "totalWorkDays": 22,
      "createdAt": "2023-04-24T10:00:00.499"
    },
    {
      "amountIncome": 25000.33,
      "taxPaid": 1250.12,
      "totalWorkDays": 15,
      "createdAt": "2023-05-24T10:00:00.499"
    },
    {
      "amountIncome": 35000.33,
      "taxPaid": 2700.44,
      "totalWorkDays": 22,
      "createdAt": "2023-06-24T10:00:00.499"
    },
    {
      "amountIncome": 25000.33,
      "taxPaid": 1250.12,
      "totalWorkDays": 15,
      "createdAt": "2023-07-24T10:00:00.499"
    }
  ]
  res.json(sampleData);
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

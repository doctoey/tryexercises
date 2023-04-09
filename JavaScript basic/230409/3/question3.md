# calculateTax

Write a function that calculates the tax payable based on a user's income, taking the income as input.

| Income Range       | Tax Rate |
|--------------------|----------|
| >= 500,000         | 15%      |
| 300,001 - 500,000  | 10%      |
| 150,001 - 300,000  | 5%       |
| <= 150,000         | No tax   |

```js
Example 1:
Input: 150000
Output: 0

Example 2:
Input: 220000
Output: 11000

Example 3:
Input: 700000
Output: 105000
```
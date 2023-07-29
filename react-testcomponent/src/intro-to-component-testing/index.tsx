import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

export const IntroToComponentTesting = () => {
  const [income, setIncome] = useState('');
  const [totalTax, setTotalTax] = useState('');
  const [workingDays, setWorkingDays] = useState('');
  const [tableData, setTableData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get('https://2e78-183-88-226-220.ngrok-free.app/worklogs');
      console.log(response.data)
      setTableData(response.data);
      // console.log(tableData);
      setIsLoading(false);

    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);

    }
  };

  useEffect(() => {
    getData();
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRow = {
      income,
      totalTax,
      workingDays,
      date: new Date().toLocaleDateString(),
    };

    setTableData([...tableData, newRow]);

    setIncome('');
    setTotalTax('');
    setWorkingDays('');
  };
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          <form onSubmit={handleSubmit}>
            <label htmlFor="money">เงินได้</label><br />
            <input type="text" id="money" name="money" value={income} onChange={(e) => setIncome(e.target.value)} /><br />

            <label htmlFor="tax">ภาษีที่จ่ายทั้งหมด</label><br />
            <input type="text" id="tax" name="tax" value={totalTax} onChange={(e) => setTotalTax(e.target.value)} /><br />

            <label htmlFor="day">จำนวนวันทำงาน</label><br />
            <input type="text" id="day" name="day" value={workingDays} onChange={(e) => setWorkingDays(e.target.value)} /><br />

            <button type="submit">Add to Table</button>
          </form>

          <table>
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>เงินได้</th>
                <th>ภาษี 7% ที่จ่าย</th>
                <th>จำนวนวันทำงาน</th>
                <th>วันที่สร้าง</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((rowData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{rowData.amountIncome}</td>
                  <td>{rowData.taxPaid}</td>
                  <td>{rowData.totalWorkDays}</td>
                  <td>{rowData.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      )}
    </div>
  )
}
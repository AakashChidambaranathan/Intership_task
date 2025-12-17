import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import React from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const storedData = JSON.parse(localStorage.getItem("useMemo"));
      if (storedData) {
        setData([storedData]); 
      }
    } catch (err) {
      console.log(err + "error");
    }
};

const columns = useMemo(
    () => [
    { Header: "Name", accessor: "name" },
    { Header: "Last Name", accessor: "LastName" },
    ],
    []
);

const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <div className="table-container">
        <table {...getTableProps()}> 
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}5
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
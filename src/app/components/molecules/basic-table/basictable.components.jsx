import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../../atoms/columns/columns.component";
import {
  DelayedNotification,
  FilterSpan,
  TableBody,
  TableData,
  TableDiv,
  TableHead,
  TableHeader,
  TableRow,
} from "./basictable.styles";

const BasicTable = ({ movieList }) => {
  const columns = useMemo(() => COLUMNS, []);
  const [charArr, setCharArr] = useState([]);
  const [tempCharArr, setTempCharArr] = useState([]);
  const [filterVal, setFilterVal] = useState("all");
  const [showLoading, setShowLoading] = useState(false);
  const [initalVal, setInitialVal] =useState([])

  // console.log('mmm',movieCharacter)
  let ch = charArr.reduce((a, b) => (b.height ? a + +b.height : a + 0), 0);
  useEffect(() => {
    // setCharArr([]);
    setShowLoading(false);
    movieList?.map(async (val, index) => {
      const res = await fetch(val);
      const character = await res.json();
      setCharArr((charArr) => [
        ...charArr,
        {
          name: character.name,
          height: character.height,
          gender: character.gender,
        },
      ]);

      setInitialVal((initalVal) => [
        ...initalVal,
        {
          name: character.name,
          height: character.height,
          gender: character.gender,
        },
      ]);

      setShowLoading(true);
      return charArr;
    });
  }, [movieList]);

  const handleToggle = (item) => {
    console.log(item);
    setFilterVal(item);
    setTempCharArr(charArr)
    if (item === "male"){
      console.log(item)
      console.log(tempCharArr)
      setCharArr(
        tempCharArr.filter((character) => character.gender === "male")
      )}
    else if (item === "female"){
      setCharArr(
        tempCharArr.filter((character) => character.gender === "female")
      )}
    else { 
      setCharArr(initalVal)};
  };

  const reverseChar = () => { 
    let array = [];
    for (let i in charArr) {
      array.push(charArr[i]);
    }
    array.reverse();

    setCharArr(array);
  };
  const data = charArr;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <TableDiv {...getTableProps()}>
      <TableHead>
        <TableRow>
          <TableData></TableData>
          <TableData></TableData>
          <TableData>
            <FilterSpan> Filter Gender:</FilterSpan>
            {/* CODE TO FILTER GENDER */}
            <select
              value={filterVal}
              onChange={(e) => {
                handleToggle(e.target.value);
              }}
            >
              <option value="all">All</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </TableData>

          {/* END CODE TO FILTER GENDER */}
        </TableRow>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeader
                style={{ cursor: "pointer" }}
                {...column.getHeaderProps()}
                onClick={reverseChar}
              >
                {column.render("Header")}
              </TableHeader>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {showLoading ? (
          <>
            {rows?.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableData {...cell.getCellProps()}>
                        {cell?.render("Cell")}
                      </TableData>
                    );
                  })}
                </TableRow>
              );
            })}
            <TableRow>
              <TableData>Total {charArr.length}</TableData>

              <TableData>
                Total Height: {ch}cm ({Math.floor(ch / 30.48)}ft /
                {Math.round((ch / 30.48) * 12)}in )
              </TableData>
              <TableData></TableData>
            </TableRow>
          </>
        ) : (
          <DelayedNotification>Loading...</DelayedNotification>
        )}
      </TableBody>
    </TableDiv>
  );
};

export default BasicTable;

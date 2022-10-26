import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "../../atoms/columns/columns.component";
import { TableBody, TableData, TableDiv, TableHead, TableHeader, TableRow } from "./basictable.styles";

const BasicTable = ({movieList}) => {
  const columns = useMemo(() => COLUMNS, [])
const [charArr, setCharArr] = useState([])
const [tempCharArr, setTempCharArr] = useState([])
const [totalHeight, setTotalHeight] = useState(0)

// console.log('mmm',movieCharacter)

useEffect(()=>{
  movieList?.map(async(val,index)=>{ 
    const res = await fetch(val);
    const character = await res.json(); 
    setTotalHeight(character.height + totalHeight) 
    setCharArr(charArr => [...charArr, {name:character.name, height:character.height, gender:character.gender}]);
    if(index === movieList.length-1){
      movieList &&  setCharArr(charArr=>[...charArr,{name: movieList?.length, height:totalHeight,gender:''}])
      setTempCharArr(charArr)
    }
    return charArr
  })
},[movieList])

const handleToggle = (item) => {
  if(item === "male") setCharArr(tempCharArr.filter(character => character.gender === "male"))
  else if(item === "female") setCharArr(tempCharArr.filter(character => character.gender === "female"))
  else setCharArr(tempCharArr)
}

console.log('mmm',charArr)

  const data = charArr
  

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }  = useTable({
    columns,
    data ,
  })

  return (
    <TableDiv {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeader {...column.getHeaderProps()}>{column.render('Header')}</TableHeader>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {
          rows?.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <TableData {...cell.getCellProps()}>{cell?.render('Cell')}</TableData>;
                  })
                }
            </TableRow>
            );
          })
        }
      </TableBody>
    </TableDiv>
  );
};

export default BasicTable;

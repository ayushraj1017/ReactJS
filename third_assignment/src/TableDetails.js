import React from "react";
import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";

function TableDetails(props) {
  return (
    <Table
      style={{ width: "100%", border: "2px solid #ccc" }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell className="ETableCellText">Loan Amount</TableCell>
          <TableCell>₹{props.pAmount}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">Interest %</TableCell>
          <TableCell>{props.interest}%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">Tenure</TableCell>
          <TableCell>{props.duration} months</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">Emi/month</TableCell>
          <TableCell>₹{props.emi}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">Total Interest</TableCell>
          <TableCell>₹{props.totalAmountOfInterest}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            Total payment
            <br />
            (Loan Amount+interest)
          </TableCell>
          <TableCell>₹{props.totalAmount ? props.totalAmount : 0}</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}

export default TableDetails;

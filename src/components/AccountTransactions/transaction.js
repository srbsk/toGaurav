import React from '../../../node_modules/react';
import Table from '../../../node_modules/@material-ui/core/Table';
import TableCell from '../../../node_modules/@material-ui/core/TableCell';
import TableContainer from '../../../node_modules/@material-ui/core/TableContainer';
import TableRow from '../../../node_modules/@material-ui/core/TableRow';
// import Paper from '../../../node_modules/@material-ui/core/Paper';
import '../../../node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


class Transaction extends React.Component {


    state = {
        id: null,
        accountId: null,
        isMaxPagesReached: null,
        statementLine: [],
        show: false
    };

    getTransactionData() {
        fetch("http://accounttransactions-test-poc.microservice-poc-cluster-044f07927e572f208c8d33e4eab5a229-0001.us-south.containers.appdomain.cloud/account-transactions/vOB/" + this.refs.id.value + "/transactions")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        id: result.id,
                        accountId: result.accountId,
                        isMaxPagesReached: result.isMaxPagesReached,
                        statementLine: result.statementLine
                    });
                });
        this.setState({ show: true });
    }


    render() {
        return (
            <html>
                <br /><br />
                <center><text>Account ID</text><span>&nbsp;&nbsp;</span>
                    <input type="text" ref="id" name="id" /><span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
                    <button onClick={() => this.getTransactionData()}>SEARCH</button></center><br /><br />
                {this.state.show ?
                    <TableContainer >
                        <Table style={{ width: 900, margin: 'auto' }}>
                            <TableRow bgcolor="#B5938B">
                                <TableCell align="left"><bold>ID</bold></TableCell>
                                <TableCell align="center">
                                    {this.state.id}
                                </TableCell>
                            </TableRow>
                            <TableRow bgcolor="#f2f2f2">
                                <TableCell align="left"><bold>ACCOUNT ID</bold></TableCell>
                                <TableCell align="center">{this.state.accountId}</TableCell>
                            </TableRow>
                            {/* <TableRow bgcolor="#f2f2f2">
                                <TableCell align="left"><bold>MaxPagesReached</bold></TableCell>
                                <TableCell align="center">
                                    {this.state.isMaxPagesReached != null ?
                                        String(this.state.isMaxPagesReached) : this.state.isMaxPagesReached}
                                </TableCell>
                            </TableRow> */}
                            {this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>TRANSACTION ID</bold></TableCell>
                                    <TableCell align="center">{l.transactionId}</TableCell>
                                </TableRow>
                            ))}
                            {this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>TRANSACTION ID SCHEME</bold></TableCell>
                                    <TableCell align="center">{l.transactionIdScheme}</TableCell>
                                </TableRow>))}
                                {/* <TableRow bgcolor="#2E86C1">
                                    <TableCell align="center"><bold>Balance Amount</bold></TableCell>
                                    
                                </TableRow>
                                <TableRow bgcolor="#2E86C1">
                                    
                                    <TableCell align="center"><bold>Currency Amount</bold></TableCell>
                                    SubComponent={(v) => <div style={{padding: '10px'}}>Hello {v.row._index}</div>}
                                </TableRow> */}
                             {this.state.statementLine.map(l => (
                                <TableRow 
                              
                                bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>BALANCE AMOUNT</bold></TableCell>
                                    <TableCell align="center">{l.balanceAmount.currencyAmount.amount}</TableCell>
                                </TableRow>))}
                                
                                
                                {this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>creditDebitIndicator</bold></TableCell>
                                    <TableCell align="center">{l.balanceAmount.creditDebitIndicator}</TableCell>
                                </TableRow>))}


                                {this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>cashierCode</bold></TableCell>
                                    <TableCell align="center">{l.cashierCode}</TableCell>
                                </TableRow>))}
								
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>transactionCreditDebitIndicator</bold></TableCell>
                                    <TableCell align="center">{l.transactionCreditDebitIndicator}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>originalTransactionCode</bold></TableCell>
                                    <TableCell align="center">{l.originalTransactionCode}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>accountTransactionRejectionReason</bold></TableCell>
                                    <TableCell align="center">{l.accountTransactionRejectionReason}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>paymentTransactionItemStatus</bold></TableCell>
                                    <TableCell align="center">{l.paymentTransactionItemStatus}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>isPending</bold></TableCell>
                                    <TableCell align="center">{l.isPending}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>transactionCode</bold></TableCell>
                                    <TableCell align="center">{l.transactionCode}</TableCell>
                                </TableRow>))}
								
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>transactionCodeScheme</bold></TableCell>
                                    <TableCell align="center">{l.transactionCodeScheme}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>isFundsReversal</bold></TableCell>
                                    <TableCell align="center">{l.isFundsReversal}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>effectiveDate</bold></TableCell>
                                    <TableCell align="center">{l.effectiveDate}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>originatedBranchNo</bold></TableCell>
                                    <TableCell align="center">{l.originatedBranchNo}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>postedTime</bold></TableCell>
                                    <TableCell align="center">{l.postedTime}</TableCell>
                                </TableRow>))}

{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>valueDate</bold></TableCell>
                                    <TableCell align="center">{l.valueDate}</TableCell>
                                </TableRow>))}
								

{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>paymentTypeCreationDate</bold></TableCell>
                                    <TableCell align="center">{l.paymentTypeCreationDate}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>prenotificationTypeCreationDate</bold></TableCell>
                                    <TableCell align="center">{l.prenotificationTypeCreationDate}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>subjectFinalPaymentDate</bold></TableCell>
                                    <TableCell align="center">{l.subjectFinalPaymentDate}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>secondExternalAccountNo</bold></TableCell>
                                    <TableCell align="center">{l.secondExternalAccountNo}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>transactionDeferredDaysNo</bold></TableCell>
                                    <TableCell align="center">{l.transactionDeferredDaysNo}</TableCell>
                                </TableRow>))}
 
                                
               
                                
                                
                                
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>statementDesc</bold></TableCell>
                                    <TableCell align="center">{l.statementDesc}</TableCell>
                                </TableRow>))}
								
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>mandateDescription</bold></TableCell>
                                    <TableCell align="center">{l.mandateDescription}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>mobileOperatorId</bold></TableCell>
                                    <TableCell align="center">{l.mobileOperatorId}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>transactionChequeNo</bold></TableCell>
                                    <TableCell align="center">{l.transactionChequeNo}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>payeeName</bold></TableCell>
                                    <TableCell align="center">{l.payeeName}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>merchantCity</bold></TableCell>
                                    <TableCell align="center">{l.merchantCity}</TableCell>
                                </TableRow>))}

{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>merchantCountryCode</bold></TableCell>
                                    <TableCell align="center">{l.merchantCountryCode}</TableCell>
                                </TableRow>))}
								
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>transactionSourceLocationCode</bold></TableCell>
                                    <TableCell align="center">{l.transactionSourceLocationCode}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>transactionTokenNumber</bold></TableCell>
                                    <TableCell align="center">{l.transactionTokenNumber}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>transactionTokenRequestor</bold></TableCell>
                                    <TableCell align="center">{l.transactionTokenRequestor}</TableCell>
                                </TableRow>))}
								
{this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>authorizationType</bold></TableCell>
                                    <TableCell align="center">{l.authorizationType}</TableCell>
                                </TableRow>))}
								
							
								
																																																                                
                            {this.state.statementLine.map(l => (
                                <TableRow bgcolor="#f2f2f2">
                                    <TableCell align="left"><bold>POSTED DATE</bold></TableCell>
                                    <TableCell align="center">{l.postedDate}</TableCell>
                                </TableRow>
                            ))}
                        </Table>
                    </TableContainer> : null}
            </html >
        )
    }
}

export default Transaction;
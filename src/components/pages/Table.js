import React from 'react'
import { Table } from 'semantic-ui-react'

const TableStriped = ({ historicalData, source }) => {
    return (
        <>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Buy/Sell</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Time</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {source === 'binance' ?
                    <Table.Body>
                        {historicalData.map(data => {
                            return (
                                <Table.Row key={data.id}>
                                    <Table.Cell>{data.isBuyerMaker ? 'Sell' : 'Buy'}</Table.Cell>
                                    <Table.Cell>{data.price}</Table.Cell>
                                    <Table.Cell>{data.qty}</Table.Cell>
                                    <Table.Cell>Time</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                    : <Table.Body>
                        {historicalData.map((data) => {
                            return (
                                data.data.map((item, id)=> {
                                    var d = new Date(item.ts);
                                    const date = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
                                    var time = new Date(item.ts).toLocaleTimeString("en-US")
                                    return (
                                        <Table.Row key={id}>
                                            <Table.Cell>{item.direction}</Table.Cell>
                                            <Table.Cell>{item.price}</Table.Cell>
                                            <Table.Cell>{item.amount}</Table.Cell>
                                            <Table.Cell>{date + ' ' +  time}</Table.Cell>
                                        </Table.Row>
                                    )
                                })
                            )
                        })}
                    </Table.Body>}
            </Table>
        </>
    )
}

export default TableStriped
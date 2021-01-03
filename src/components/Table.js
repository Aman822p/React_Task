import React from 'react'

export default function Table({ data, click }) {
    const clickHandler = (shipment) => {
        click(shipment)
    }

    return (
        <div class="right-table">
                <table>
                    <tr class="thead">
                        <th>AWB NUMBER</th>
                        <th>TRANSPORTER</th>
                        <th>SOURCE</th>
                        <th>DESTINATION</th>
                        <th>BRAND</th>
                        <th>START DATE</th>
                        <th>ETD</th>
                        <th>STATUS</th>    
                    </tr>
                    {
                        data.map(shipment => (
                            <tr class="trow" key={shipment._id} onClick={() => clickHandler(shipment.scan)}>
                                <td>{shipment.awbno}</td>
                                <td>{shipment.carrier}</td>
                                <td>{shipment.from}</td>
                                <td>{shipment.to}</td>
                                <td>{shipment.carrier}</td>
                                <td>{shipment.pickup_date}</td>
                                {shipment.extra_fields &&
                                <td>{shipment.extra_fields.expected_delivery_date}</td>}
                                <td class="status-now">{shipment.current_status}</td>
                            </tr>
                        ))
                    }
                    </table>
            </div>
    )
}

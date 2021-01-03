import { useState } from 'react';

import Header from './components/Header';
import Status from './components/Status';
import Table from './components/Table';
import Timeline from './components/Timeline';

import './App.css';

function App() {
  const res = {
      "data": [
          {
              "_id": "5d309ea2048csdsddsd92de9", //Unique Id (Not used in the design)
              "awbno": "68816235", // AWB Number
              "carrier": "Safexpress", // Use this for Transporter and Brand both.
              "pickup_date": "2019-07-11 00:00:00", //Start Date,
              "current_status": "Out for Delivery", // Current status, used for counters and in tabular view in `Status`
              "current_status_code": "DEL", //Current Status Code, used for counters
              "order_data": "", //Not used
              "recipient": "", // Not used
              "extra_fields": {
                  "expected_delivery_date": "1970-01-01 05:30:00" // ETD
              },
              "from": "WHITEFIELD", //Source
              "to": "NEW DELHI", //Destination
              "time": "2019-07-18 02:13:57",
              "scan": [ //Used in timeline view
                  {
                      "time": "2019-07-18 02:13:57", //Time in timeline view (right)
                      "location": "Consignment Out for Delivery", //not used
                      "status_detail": "OUT FOR DELIVERY" // Status in timeline view (left)
                  },
                  {
                      "time": "2019-07-17 23:02:24",
                      "location": "Waybill Undelivered",
                      "status_detail": "UN-DELIVERED"
                  },
                  {
                      "time": "2019-07-17 03:59:19",
                      "location": "Consignment Out for Delivery",
                      "status_detail": "OUT FOR DELIVERY"
                  },
                  {
                      "time": "2019-07-15 18:49:46",
                      "location": "Waybill Undelivered",
                      "status_detail": "UN-DELIVERED"
                  },
                  {
                      "time": "2019-07-15 04:14:20",
                      "location": "Consignment Out for Delivery",
                      "status_detail": "OUT FOR DELIVERY"
                  },
                  {
                      "time": "2019-07-13 20:41:28",
                      "location": "Consignment Arrived at DELHI",
                      "status_detail": "ARRIVED AT DESTINATION"
                  },
                  {
                      "time": "2019-07-11 07:01:53",
                      "location": "Consignment In Transit To Next Hub",
                      "status_detail": "IN-TRANSIT"
                  },
                  {
                      "time": "2019-07-11 03:05:26",
                      "location": "Consignment Arrived at BANGALORE",
                      "status_detail": "IN-TRANSIT"
                  },
                  {
                      "time": "2019-07-11 00:00:00",
                      "location": "Waybill Generated at WHITEFIELD",
                      "status_detail": "BOOKED"
                  }
              ],
              "tracking_url": "https://s.shipway.in/21759772/68816235",
              "createdAt": "2019-07-18T16:30:26.155Z"
          },
          {
            "_id": "5chjhffdrsd4522jhj98", //Unique Id (Not used in the design)
            "awbno": "12456799", // AWB Number
            "carrier": "Blue Dart", // Use this for Transporter and Brand both.
            "pickup_date": "2020-04-23 14:03:00", //Start Date,
            "current_status": "Out for Delivery", // Current status, used for counters and in tabular view in `Status`
            "current_status_code": "OOD", //Current Status Code, used for counters
            "order_data": "", //Not used
            "recipient": "", // Not used
            "extra_fields": {
                "expected_delivery_date": "1969-03-12 07:15:00" // ETD
            },
            "from": "BHOPAL", //Source
            "to": "INDORE", //Destination
            "time": "2019-07-18 02:13:57",
            "scan": [ //Used in timeline view
                {
                    "time": "2019-07-18 02:13:57", //Time in timeline view (right)
                    "location": "Consignment Out for Delivery", //not used
                    "status_detail": "OUT FOR DELIVERY" // Status in timeline view (left)
                },
                {
                    "time": "2019-07-17 23:02:24",
                    "location": "Waybill Undelivered",
                    "status_detail": "UN-DELIVERED"
                },
                {
                    "time": "2019-07-17 03:59:19",
                    "location": "Consignment Out for Delivery",
                    "status_detail": "OUT FOR DELIVERY"
                },
                // {
                //     "time": "2019-07-15 18:49:46",
                //     "location": "Waybill Undelivered",
                //     "status_detail": "UN-DELIVERED"
                // },
                {
                    "time": "2019-07-15 04:14:20",
                    "location": "Consignment Out for Delivery",
                    "status_detail": "OUT FOR DELIVERY"
                },
                {
                    "time": "2019-07-13 20:41:28",
                    "location": "Consignment Arrived at DELHI",
                    "status_detail": "ARRIVED AT DESTINATION"
                },
                {
                    "time": "2019-07-11 07:01:53",
                    "location": "Consignment In Transit To Next Hub",
                    "status_detail": "IN-TRANSIT"
                },
                {
                    "time": "2019-07-11 03:05:26",
                    "location": "Consignment Arrived at BANGALORE",
                    "status_detail": "IN-TRANSIT"
                },
                {
                    "time": "2019-07-11 00:00:00",
                    "location": "Waybill Generated at WHITEFIELD",
                    "status_detail": "BOOKED"
                }
            ],
            "tracking_url": "https://s.shipway.in/21759772/68816235",
            "createdAt": "2019-07-18T16:30:26.155Z"
        }
      ]
  }

  const initialStatus = [
      { label: "DEL", value: 916 },
      { label: "INT", value: 232 },
      { label: "OOD", value: 342 },
      { label: "DEX", value: 916 },
      { label: "NFI", value: 916 }
  ]

  const [shipments, setShipments] = useState(res)
  const [currentScan, setCurrentScan] = useState(res.data[0].scan)
  const [status, setStatus] = useState(initialStatus)

  const onClickHandler = (scan) => {
      setCurrentScan(scan)
  }

  return (
    <div className="App">
        <Header />
        <div className="main-container">
            <Status status={status}/>
            <div className="table-container">
                <Timeline scan={currentScan}/>
                <Table data={shipments.data} click={onClickHandler}/>
            </div>
        </div>
    </div>
  );
}

export default App;

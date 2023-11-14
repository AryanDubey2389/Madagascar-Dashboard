import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
const numbers = Array.from({ length: 21 }, (_, index) => index);
const labels = [
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2019",
  "2019",
  "2020",
  "2021",
];
const green_data = [42012330,	42817519,	38126491,	39672216,	42786702,	28429021,	88338081,	55570161,	64872823,
  49124676,	81012567,	61498989,	151662087, 199334033, 151689472, 199683227,	258852540,
  187436141, 125972962,	126537601, 121041398,	135216960]

const cover_data = [91546,	104076,	110554,	94071,	110165,	100124,	209052, 141586,	154306,	125969,	170225,	
    139729,	323303,	456014,	327788,	416210,	563730,	399336,	280487,	266295,	266671, 287759];

const tree_data = [2025.337708,
  3907.775184,
  2742.634309,
  1813.771213,
  3863.081728,
  4729.026174,
  6977.873319,
  4019.967804,
  5138.65995,
  7886.608421,
  5816.676031,
  11153.41828,
  14427.80845,
  48899.43255,
  15328.72655,
  18799.94849,
  36332.85357,
  21259.74411,
  23426.29394,
  11844.30026,
  18527.89954,
  21367.50926,
  ];
 const fire_data =  ['NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 329570,	404684,	342280,	336779,	419009,	335868,	360059,	324139,	387358,	321414,
    256621,	218387
  ]
function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" style={{color: 'red'}}>Madagascar</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">Year</th>
                      <th className="text-center">Cover Tree Loss</th>
                      <th className="text-center">Green House Emission</th>
                      <th className="text-center">Loss of Trees due to deforestation</th>
                      <th className="text-center">Yearly Fire Alerts</th>
                    </tr>
                  </thead>
                  <tbody>
                  {numbers.map((i) => (
                    <tr>
                      <td className="text-center">{labels[i]}</td>
                      <td className="text-center">{cover_data[i]}</td>
                      <td className="text-center">{green_data[i]}</td>
                      <td className="text-center">{tree_data[i]}</td>
                      <td className="text-center">{fire_data[i]}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Analysis of above data</CardTitle>
              </CardHeader>
              <CardBody>
                Hi there I am here!!
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;

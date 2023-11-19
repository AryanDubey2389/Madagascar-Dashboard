import React from "react";
import { Link } from "react-router-dom";
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
              <div className="typography-line">
                  <span>Cover Tree Loss Trend Analysis</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary text-white">
                    Initial Stability and Subsequent Increase: Madagascar's biodiversity is incredibly diverse but also highly endangered. The initial stability might reflect a period of equilibrium or insufficient data collection. The increase in biodiversity metrics could be due to improved conservation efforts, international aid, or environmental policies that were effective during that period.
Sharp Decline After 2016: The decline could be attributed to several factors such as increased deforestation, political instability affecting conservation efforts, the impact of climate change, and a rise in illegal wildlife trade. Additionally, specific events such as severe weather, droughts, or cyclones, which are not uncommon in the region, could have contributed to a sudden loss in biodiversity.
Stabilization Post-2019: This may indicate that some of the detrimental effects have been curbed or that mitigation efforts have begun to show results. Alternatively, it might also reflect a new baseline where the biodiversity has stabilized at a lower level due to permanent losses.
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                <span>Weekly Fire Alerts Trend Analysis</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary text-white">
                    Low Activity in Early Weeks: This could correspond to the wet season in Madagascar, which typically experiences fewer fires.
Increase Around Week 17 Onwards: The increase aligns with the dry season, which usually starts in May and lasts until October. During this period, the risk of fires can be higher due to dry vegetation, and slash-and-burn agriculture (tavy) can contribute significantly to these numbers.
Peak and Fluctuations: The peak around mid-year could coincide with the height of the dry season, where conditions for fires are most prevalent. Fluctuations might result from variations in human activity, enforcement of fire management policies, or natural factors like sporadic rain.
Decrease Towards Year-End: This decline likely corresponds to the onset of the wet season, where rainfall reduces the likelihood of fires.
For Madagascar specifically, deforestation is a significant concern, often driven by slash-and-burn agriculture, logging for timber, and the production of charcoal. These activities can contribute to both the loss of biodiversity and increase in fire alerts.
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                <span>Yearly Fire Alerts Trend Analysis</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary text-white">
                    Improved Fire Management and Prevention Policies:  Madagascar has implemented more effective fire management and prevention policies, including increased awareness, surveillance, and stricter regulations, it could contribute to a decline in forest fires.

Community Involvement and Education: Engaging local communities in forest protection and providing education on fire prevention methods can be crucial. If there have been successful community-based initiatives to prevent and manage fires, it could lead to a reduction in incidents.

Climate and Weather Patterns: Natural factors, such as changes in climate and weather patterns, can influence the occurrence and intensity of forest fires. If there have been shifts in weather conditions that are less conducive to fires, it could contribute to a decreasing trend.

Satellite Monitoring and Early Warning Systems: Advances in technology, including satellite monitoring and early warning systems, can help detect and respond to fires more rapidly. Timely intervention can prevent fires from spreading and causing extensive damage logging for timber, and the production of charcoal. These activities can contribute to both the loss of biodiversity and increase in fire alerts.
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                <span>Greenhouse Emission Trend Analysis</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary text-white">
                    Madagascar's greenhouse gas emissions depict a dynamic interplay of economic, demographic, and environmental factors. From 2001 to 2007, rapid economic and population growth led to a steady rise in emissions. The global financial crisis in 2008–2010 caused a decline, associated with economic slowdown.

Since 2011, emissions have stabilized, influenced by economic growth, population expansion, climate change, and government policies. Despite a 2019 uptick by 1.6%, the overall trend remains relatively stable. Government initiatives promoting renewable energy and efficiency may contribute to this stability.

Madagascar's emission trajectory hinges on evolving factors. Continued economic and population growth may increase emissions, while climate change impacts and government policies could mitigate or exacerbate effects. Understanding these dynamics is crucial for developing effective strategies for sustainable development.
                    </p>
                  </blockquote>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;

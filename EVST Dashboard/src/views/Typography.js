import React from "react";
import { Link } from 'react-router-dom';
import { HiExternalLink } from "react-icons/hi";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Typography() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader className="mb-5">
                <h5 className="card-category">Madagascar Forest</h5>
                <CardTitle tag="h3">
                  Created using Poppins Font Family
                </CardTitle>
              </CardHeader>
              <CardBody>

                <div className="typography-line">
                  <span>Abstract</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      This project rigorously examined Madagascar's pressing environmental issues such as deforestation. Addressing
                      the alarming impact of forest fires, the study proposed strategic preventive measures. It also delved into restoring tropical
                      agro systems and emphasized the crucial role of informed policy-making in saving forests.
                      Evaluation of mangrove restoration initiatives showcased their significance in coastal
                      protection. Leveraging advanced data visualization, the project illustrated interconnected
                      factors, supporting holistic forest management approaches. This impactful analysis seeks to
                      drive informed decision-making and sustainable solutions for Madagascar's vital ecosystems.
                      <br />
                      <small>- Team 18  </small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <span>References</span>

                  <Link to="https://www.grida.no/resources/1336" className="text-muted block mt-2 mb-2">
                    Madagascar's Environmental Values and Challenges <HiExternalLink className="ml-3" />

                  </Link>
                  <br />
                  <Link to="https://www.wfp.org/countries/madagascar" className="text-primary block mt-2 mb-2">
                    Madagascar (World Food Programme)<HiExternalLink className="ml-3" />

                  </Link>
                  <br />
                  <Link to="https://wwfeu.awsassets.panda.org/downloads/madagascar_forest_cc_final_12nov07.pdf" className="text-info block mt-2 mb-2">
                    Madagascar Forests (World Wide Fund)<HiExternalLink className="ml-3" />

                  </Link>
                  <br />
                  <Link to="https://www.worldwildlife.org/places/madagascar" className="text-success block mt-2 mb-2">
                    Madagascar (World Wide Fund)<HiExternalLink className="ml-3" />

                  </Link>
                  <br />
                  <Link to="https://www.globalforestwatch.org/dashboards/country/MDG/?category=undefined" className="text-warning block mt-2 mb-2">
                    Madagascar (Global Forest Watch)<HiExternalLink className="ml-3" />

                  </Link>
                  <br />
                  <Link to="https://www.sciencedirect.com/science/article/pii/S2351989423000240#:~:text=In%202010%2C%20Madagascar%20had%2016.4,loss%20between%202001%20and%202021" className="text-danger block mt-2 mb-2">
                    Status of deforestation of Madagascar<HiExternalLink className="ml-3" />

                  </Link>
                  <br />
                  <Link to="https://www.rainforesttrust.org/urgent-projects/saving-the-lost-forest-of-madagascar/" className="text-white block mt-2 mb-2">
                    Saving the Lost Forest of Madagascar<HiExternalLink className="ml-3" />

                  </Link>
                  <br />
                  <Link to="https://link.springer.com/chapter/10.1007/978-4-431-54804-1_7" className="text-success block mt-2 mb-2">
                    Managing Environmental Risks and Promoting Sustainability: Conservation of Forest Resources in Madagascar<HiExternalLink className="ml-3" />

                  </Link>
                  <br />
                  <Link to="https://link.springer.com/article/10.1007/s40808-022-01671-5" className="text-danger block mt-2 mb-2">
                    Spatio-temporal spectral trajectory pattern to continuous maps of forest disturbance and recovery: case of tropical forests of Vatovavy Fitovinany, Madagascar
                    <HiExternalLink className="ml-3" />

                  </Link>
                </div>
                <div className="typography-line">
  <span>Quotes</span>
  <blockquote style={{ backgroundColor: '#FF671F', margin: '0', width: '100%', marginBottom: '-18px' }}>
    <p className="blockquote blockquote-primary text-white">
      Earth provides enough to satisfy every man's needs, but not every man's greed.
      <br />
      <small className="text-white">- Marlee Matlin</small>
    </p>
  </blockquote>
  <div style={{ backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', width: '100%', height: '100%', margin: '0' }}>
  <p className="blockquote blockquote-primary" style={{ color: 'blue', margin: '0', display: 'flex', alignItems: 'center', width: '100%' }}>
    The Earth does not belong to us: we belong <br/>to the Earth.
    <a title="Original: Government of India Vector:  SKopp, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Ashoka_Chakra.svg">
      <img width="96" alt="Ashoka Chakra" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ashoka_Chakra.svg/256px-Ashoka_Chakra.svg.png" style={{ marginLeft: '10px', marginTop: '-20px', marginBottom: '-20px' }} />
    </a>
    <small style={{ color: 'blue', marginLeft: '5px' }}>- Mahatma Gandhi</small>
  </p>
</div>
  <blockquote style={{ backgroundColor: '#008000', margin: '0' }}>
    <p className="blockquote blockquote-primary text-white">
      The greatest threat to our planet is the belief that someone else will save it.
      <br />

      <small className="text-white">- Robert Swan</small>
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

export default Typography;

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Tabs, Tab } from "react-bootstrap";
export default function Bootstrap() {
  return (
    <>
      <h3>Bootstrap Komponentleri</h3>
      <Button>Button</Button>
      <Button variant="success">Success Button</Button>
      <Tabs
        defaultActiveKey="contact"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <div> HOME </div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <div> PROFİLE </div>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <div> CONTACT </div>
        </Tab>
      </Tabs>
    </>
  );
}

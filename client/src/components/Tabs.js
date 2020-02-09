import React, {useState} from 'react';
import '../App.css';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Progress
} from 'reactstrap';
import classnames from 'classnames';
import { useAuth0 } from "../react-auth0-spa";
import FullGoalList from './FullGoalList';
import Dashboard from './Dashboard';

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [activeRefresh, setActiveRefresh] = useState(false);

    const toggle = tab => {
        if (activeTab !== tab) 
            setActiveTab(tab);
        }

    const { user } = useAuth0();
    
    return (
        <div className="tab-div">
            <Nav tabs style={{ marginBottom: '1rem' }}>
                <NavItem>
                    <NavLink
                        className={classnames({
                        active: activeTab === '1'
                    })}
                        onClick={() => {
                        toggle('1');
                    }}>
                        Dashboard
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                        active: activeTab === '2'
                    })}
                        onClick={() => {
                        toggle('2');
                        setActiveRefresh(true);
                    }}>
                        Goals
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <Dashboard />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <FullGoalList activeRefresh={activeRefresh} setActiveRefresh={setActiveRefresh}/>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Tabs;

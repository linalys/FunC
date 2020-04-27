
import SocialMediaBar from "../../../Header/SocialMediaBar";
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Button, Badge, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Header, SidebarNav, Footer, PageContent, Page } from '../vibe';
import nav from '../_nav';
import routes from '../views';
import "./../vibe/scss/styles.scss"



const MOBILE_SIZE = 992;

export default class DashboardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarCollapsed: false,
            isMobile: window.innerWidth <= MOBILE_SIZE,
        };
    }

    handleResize = () => {
        if (window.innerWidth <= MOBILE_SIZE) {
            this.setState({sidebarCollapsed: false, isMobile: true});
        } else {
            this.setState({isMobile: false});
        }
    };

    componentDidUpdate(prev) {
        if (this.state.isMobile && prev.location.pathname !== this.props.location.pathname) {
            this.toggleSideCollapse();
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    toggleSideCollapse = () => {
        this.setState(prevState => ({sidebarCollapsed: !prevState.sidebarCollapsed}));
    };

    render() {
        const {sidebarCollapsed} = this.state;
        const sidebarCollapsedClass = sidebarCollapsed ? 'side-menu-collapsed' : '';
        return (
            <div className="dashboardCSS">
                <div className={`app ${sidebarCollapsedClass}`}>
                    <div className="app-body">
                        <SidebarNav
                            nav={nav}
                            logoText="FunC"
                            isSidebarCollapsed={sidebarCollapsed}
                            toggleSidebar={this.toggleSideCollapse}
                            {...this.props}
                        />
                        <Page>
                            <Header
                                toggleSidebar={this.toggleSideCollapse}
                                isSidebarCollapsed={sidebarCollapsed}
                                routes={routes}
                                {...this.props}
                            >
                                <HeaderNav/>
                            </Header>
                            <PageContent>
                                <Switch>
                                    {routes.map((page, key) => (
                                        <Route path={page.path} component={page.component} key={key}/>
                                    ))}
                                </Switch>
                            </PageContent>
                        </Page>
                    </div>
                    <Footer>
                        <SocialMediaBar/>
                        <div className="copyrightText">
                            &copy; Copyright 2020 PSPI
                        </div>
                    </Footer>

                </div>
            </div>
        );
    }
}

function HeaderNav() {
    return (
        <React.Fragment>
            <NavItem>
                <form className="form-inline">
                    <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
                    <Button type="submit" className="d-none d-sm-block">
                        <i className="fa fa-search" />
                    </Button>
                </form>
            </NavItem>

        </React.Fragment>
    );
}
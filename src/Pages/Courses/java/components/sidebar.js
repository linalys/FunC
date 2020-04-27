import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from "react-router-dom";

import {Button, Container} from "reactstrap";

const StyledSideNav = styled.div`   
    position: absolute;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 300px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    background-color: #343A40; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 30px;
`;

class SideNav extends React.Component {

    constructor(props) {
        super(props);
        const basePath = '/cpp/lessons';
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: basePath + '/main',
                    name: 'Main',
                    key: 1
                },
                {
                    path: basePath + '/print',
                    name: 'Print Instructions',
                    key: 2
                },
                {
                    path: basePath + '/comments',
                    name: 'Comments',
                    key: 3
                },
                {
                    path: basePath + '/variables',
                    name: 'Variables & Types',
                    key: 4
                },
                {
                    path: basePath + '/strings',
                    name: 'Strings',
                    key: 5
                },
                {
                    path: basePath + '/if',
                    name: 'If-Loops',
                    key: 6
                }, {
                    path: basePath + '/switch',
                    name: 'Switch Case',
                    key: 7
                },
                {
                    path: basePath + '/while',
                    name: 'While & Do-While Loops',
                    key: 8
                },
                {
                    path: basePath + '/for',
                    name: 'For-Loop',
                    key: 9
                },
                {
                    path: basePath + '/arrays',
                    name: 'Arrays',
                    key: 10
                },
                {
                    path: basePath + '/arrayList',
                    name: 'ArrayList',
                    key: 11
                },
                {
                    path: basePath + '/forEach',
                    name: 'For-Each',
                    key: 12
                },
                {
                    path: basePath + '/hashMap',
                    name: 'HashMap',
                    key: 13
                },
                {
                    path: basePath + '/classes',
                    name: 'Classes and Objects',
                    key: 14
                },
                {
                    path: basePath + '/methods',
                    name: 'Methods',
                    key: 15
                },
                {
                    path: basePath + '/constructor',
                    name: 'Constructor',
                    key: 16
                },
                {
                    path: basePath + '/setters',
                    name: 'Setters and Getters',
                    key: 17
                },
                {
                    path: basePath + '/packages',
                    name: 'Packages',
                    key: 18
                },

            ]
        }
    }

    onItemClick = (path) => {
        this.setState({activePath: path});
    };

    render() {
        const {items, activePath} = this.state;
        return (
            <StyledSideNav>

                {
                    items.map((item) => {
                        return (

                            <NavItem
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 40px;
    width: 300px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    position: relative;
    a {
        font-size: 20px;
        line-height: 50%;
        color: ${(props) => props.active ? "white" : "#c6cacb"};
        :hover {
            opacity: 0.7;
            color: white;
            font-weight: bold;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const {path, onItemClick} = this.props;
        onItemClick(path);
    };

    render() {
        const {active} = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon>{this.props.name}</NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
`;

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenNav: true
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState(state => ({
            hiddenNav: !state.hiddenNav
        }))
    }

    render() {
        const isHidden = "navStyle" + (this.state.hiddenNav ? " navStyleHidden" : "");
        const buttonClass = "CollapseButton" + (!this.state.hiddenNav ? " CollapseButtonActive" : "");
        const direction = (this.state.hiddenNav ? ">>" : "<<");
        console.log(isHidden);
        return (
            <div className={isHidden}>
                <div>
                    <RouterSideNav/>
                </div>
                <Button className={buttonClass} onClick={this.toggleNav}>
                    {direction}
                </Button>
            </div>
        )
    }
}
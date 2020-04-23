import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from "react-router-dom";
import './sidebar.css'
import Navbar from "react-bootstrap/Navbar";
import {Button, Container} from "reactstrap";

const StyledSideNav = styled.div`   
    position: absolute;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 300px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    background-color: #343A40; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 30px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;

class SideNav extends React.Component {

    constructor(props) {
        super(props);
        const basePath = '/cpp/lessons';
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: basePath + '/helloWord',
                    name: 'Hello word',
                    key: 1
                },
                {
                    path: basePath + '/input',
                    name: 'InputOutput',
                    key: 2
                },
                {
                    path: basePath + '/comments',
                    name: 'Comments',
                    key: 3
                },
                {
                    path: basePath + '/variables',
                    name: 'Variables',
                    key: 4
                },
                {
                    path: basePath + '/strings',
                    name: 'Strings',
                    key: 5
                },
                {
                    path: basePath + '/arrays',
                    name: 'Arrays',
                    key: 6
                }, {
                    path: basePath + '/if',
                    name: 'Conditional Statements',
                    key: 7
                },
                {
                    path: basePath + '/switch',
                    name: 'Switch Case',
                    key: 8
                },
                {
                    path: basePath + '/while',
                    name: 'While Loop',
                    key: 9
                },
                {
                    path: basePath + '/doWhile',
                    name: 'Do-While Loop',
                    key: 10
                },
                {
                    path: basePath + '/for',
                    name: 'For Loop',
                    key: 11
                },
                {
                    path: basePath + '/pointers',
                    name: 'Pointers',
                    key: 12
                },
                {
                    path: basePath + '/reference',
                    name: 'Reference',
                    key: 13
                },
                {
                    path: basePath + '/functions',
                    name: 'Functions',
                    key: 14
                },
                {
                    path: basePath + '/classes',
                    name: 'Classes',
                    key: 15
                },
                {
                    path: basePath + '/constructors',
                    name: 'Constructors and Destructors',
                    key: 16
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
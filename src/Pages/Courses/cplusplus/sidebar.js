import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import './sidebar.css'

const StyledSideNav = styled.div `   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 300px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.4em;      /* Stay at the top */
    background-color: #343A40; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/helloWord',
                    name: 'Hello word',
                    key: 1
                },
                {
                    path: '/input',
                    name: 'InputOutput',
                    key: 2
                },
                {
                    path: '/comments',
                    name: 'Comments',
                    key: 3
                },
                {
                    path: '/variables',
                    name: 'Variables',
                    key: 4
                },
                {
                    path: '/strings',
                    name: 'Strings',
                    key: 5
                },
                {
                    path: '/arrays',
                    name: 'Arrays',
                    key: 6
                },{
                    path: '/if',
                    name: 'Conditional Statements',
                    key: 7
                },
                {
                    path: '/switch',
                    name: 'Switch Case',
                    key: 8
                },
                {
                    path: '/while',
                    name: 'While Loop',
                    key: 9
                },
                {
                    path: '/doWhile',
                    name: 'Do-While Loop',
                    key: 10
                },
                {
                    path: '/for',
                    name: 'For Loop',
                    key: 11
                },
                {
                    path: '/pointers',
                    name: 'Pointers',
                    key: 12
                },
                {
                    path: '/reference',
                    name: 'Reference',
                    key: 13
                },
                {
                    path: '/functions',
                    name: 'Functions',
                    key: 14
                },
                {
                    path: '/classes',
                    name: 'Classes',
                    key: 15
                },
                {
                    path: '/constructors',
                    name: 'Constructors and Destructors',
                    key: 16
                },
            ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                <br/>
                <br/>
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
    a {
        font-size: 20px;
        line-height: 50%;
        color: ${(props) => props.active ? "white" : "#c6cacb"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
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
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}
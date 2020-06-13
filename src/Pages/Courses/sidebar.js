import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from "react-router-dom";
import './sidebar.css'
import {Button} from "reactstrap";


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
        this.state = {
            activePath: props.location.pathname,
            items: props.Lessons
        }
    }

    onItemClick = (path) => {
        this.setState({activePath: path});
    };

    componentWillReceiveProps() {
        this.setState({items: this.props.Lessons})
    }

    render() {
        const {items, activePath} = this.state;

        return (
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (

                            <NavItem
                                path={item.url}
                                name={item.title}
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

const RouterSideNav = withRouter((props) => <SideNav {...props}/>);


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

    toggleNav() {
        this.setState(state => ({
            hiddenNav: !state.hiddenNav
        }))
    }

    render() {
        const isHidden = "navStyle" + (this.state.hiddenNav ? " navStyleHidden" : "");
        const buttonClass = "CollapseButton" + (!this.state.hiddenNav ? " CollapseButtonActive" : "");
        const direction = (this.state.hiddenNav ? ">>" : "<<");
        return (
            <div className={isHidden}>
                <div>
                    <RouterSideNav Lessons={this.props.Lessons}/>
                </div>
                <Button className={buttonClass} onClick={this.toggleNav}>
                    {direction}
                </Button>
            </div>

        )
    }
}
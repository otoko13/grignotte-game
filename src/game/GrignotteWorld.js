
import React, { Component } from 'react';
import { World } from 'react-game-kit';
import Matter from 'matter-js';
import PropTypes from 'prop-types';
import GrignotteBody from './GrignotteBody';
import GameConstants from "./GameConstants";

class GrignotteWorld extends Component {

    constructor(props) {
        super(props);
        this.physicsInitBound = this.physicsInit.bind(this);
    }

    physicsInit(engine) {
        this.engine = engine;
        this.engine.world.gravity.y = 0;
        this.engine.world.gravity.x = 0;
    }

    componentDidMount() {
        const containerBodyOptions = {
            isStatic: true,
            friction: 0,
            frictionStatic: 0,
            restitution: 1,
            collisionFilter: {
                group: 1,
            },
        };

        this.ceiling = Matter.Bodies.rectangle(
            0,
            0,
            this.props.width * 2,
            GameConstants.WORLD.WALL_WIDTH,
            containerBodyOptions
        );
        this.ground = Matter.Bodies.rectangle(
            0,
            this.props.height - GameConstants.WORLD.WALL_WIDTH,
            this.props.width * 2,
            GameConstants.WORLD.WALL_WIDTH,
            containerBodyOptions
        );
        this.leftWall = Matter.Bodies.rectangle(
            0,
            0,
            GameConstants.WORLD.WALL_WIDTH,
            this.props.height * 2,
            containerBodyOptions
        );
        this.rightWall = Matter.Bodies.rectangle(
            this.props.width - GameConstants.WORLD.WALL_WIDTH,
            0,
            GameConstants.WORLD.WALL_WIDTH,
            this.props.height * 2,
            containerBodyOptions
        );

        Matter.World.addBody(this.engine.world, this.ceiling);
        Matter.World.addBody(this.engine.world, this.ground);
        Matter.World.addBody(this.engine.world, this.leftWall);
        Matter.World.addBody(this.engine.world, this.rightWall);
    }

    render() {
        const commonProps = {
            stageWidth: this.props.width,
            stageHeight: this.props.height,
        };

        return (
            <World onInit={this.physicsInitBound}>
                <GrignotteBody {...commonProps} />
            </World>
        );
    }
}

GrignotteWorld.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

export default GrignotteWorld;

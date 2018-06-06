import React, { Component } from 'react';
import { Body } from 'react-game-kit';
import PropTypes from 'prop-types';
import Matter from 'matter-js';

import GameConstants from "./GameConstants";

class GrignotteBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
        };
        this.updateBound = this.update.bind(this);
    }

    componentDidMount() {
        this.context.loop.subscribe(this.updateBound);
        this.applyRandomStartForce();
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.updateBound);
    }

    applyRandomStartForce() {
        const currentXPosition = this.body.body.position.x;
        const currentYPosition = this.body.body.position.y;
        const currentRadius = this.body.body.circleRadius;
        const allowance = 15;
        const atXStart = currentXPosition < (currentRadius + allowance);
        const atXEnd = currentXPosition > (this.props.stageWidth - currentRadius - allowance);
        const atYStart = currentYPosition < (currentRadius + allowance);
        const atYEnd =  currentYPosition > (this.props.stageHeight - currentRadius - allowance);
        let directionRandomizerX = Math.random() > 0.5 ? -1 : 1;
        let directionRandomizerY = Math.random() > 0.5 ? -1 : 1;
        if (atXStart) {
            directionRandomizerX = 1;
        } else if (atXEnd) {
            directionRandomizerX = -1;
        }
        if (atYStart) {
            directionRandomizerY = 1;
        } else if (atYEnd) {
            directionRandomizerY = -1;
        }
        const randomStartForceVector = {
            x: directionRandomizerX * GameConstants.GRIGNOTTE.START_FORCE_X,
            y: directionRandomizerY * Math.random() * GameConstants.GRIGNOTTE.START_FORCE_Y,
        };
        Matter.Body.applyForce(this.body.body, this.body.body.position, {x: randomStartForceVector.x, y: randomStartForceVector.y});
    }

    update() {
        const currentPosition = this.body.body.position;
        console.log(currentPosition);
    }

    render() {
        return (
            <Body args={[100, 100, 100]}
                  shape='circle'
                  inertia={0}
                  density={1}
                  friction={0}
                  frictionAir={0}
                  frictionStatic={0}
                  restitution={1}
                  collisionFilter={
                      {
                          group: 1,
                      }
                  }
                  ref={(b) => { this.body = b }} >
            <div className="DUMMY_REPLACE"></div>
            </Body>
        );
    }
}

GrignotteBody.contextTypes = {
    engine: PropTypes.object,
    loop: PropTypes.object,
};

GrignotteBody.propTypes = {
    stageWidth: PropTypes.number,
    stageHeight: PropTypes.number,
};

export default GrignotteBody;

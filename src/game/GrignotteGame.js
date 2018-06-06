
import React from 'react';
import { Loop, Stage, } from 'react-game-kit';
import PropTypes from 'prop-types';

import GrignotteWorld from './GrignotteWorld';
import GameConstants from "./GameConstants";

const GrignotteGame = () =>
    <Loop>
        <Stage width={GameConstants.STAGE.WIDTH}
               height={GameConstants.STAGE.HEIGHT}
               style={{transform: 'translate(0, 0)'}}>
            <GrignotteWorld width={GameConstants.STAGE.WIDTH}
                            height={GameConstants.STAGE.HEIGHT} />
        </Stage>
    </Loop>;

GrignotteGame.propTypes = {
    stageDimensions: PropTypes.object,
    onSelectAnswer: PropTypes.func,
};

export default GrignotteGame;

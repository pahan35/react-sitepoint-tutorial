import React from 'react';
import PropTypes from 'prop-types'

export default class ReadingTime extends React.Component {
    static propTypes = {
        wordsPerMinute: PropTypes.number
    };
    
    static defaultProps = {
        wordsPerMinute: 270
    };
    
    constructor(props) {
        super(props);
        
        this.state = {
            readTime: 0
        };
    }
    
    render() {
        return (
            <div></div>
        )
    }
}
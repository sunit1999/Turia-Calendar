import React from 'react';
import './Event.styles.scss';

export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.stopPropagation();
    this.props.onClick();
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        onClick={this.onClick}
        className="dailyEventWrapper"
      >
        <span className="dailyEventTitle">{this.props.title}</span>
      </div>
    );
  }
}

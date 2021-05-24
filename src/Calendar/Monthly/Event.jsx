import React from 'react';
import classnames from 'classnames';
import { middlePosition, startPosition } from '../constants';
import './Event.styles.scss';

export default class Event extends React.PureComponent {
  returnEventsClassName(position) {
    const { inactive } = this.props;
    const className = ["dayCellEvent"];
    if (position) {
      if (position === startPosition) {
        className.push("eventStart");
      } else if (position === middlePosition) {
        className.push("eventMiddle");
      } else {
        className.push("eventEnd");
      }
    }
    if (inactive) {
      className.push("eventInactive");
    }
    return classnames(className);
  }

  returnEventName(title, position) {
    let showTitle = false;
    if (position) {
      if (position === startPosition) {
        showTitle = true;
      }
    } else {
      showTitle = true;
    }
    if (showTitle) {
      return <span className={"eventTitle"}>{title}</span>;
    }
  }

  render() {
    const { color, position, title, height } = this.props;
    return (
      <div
        style={{ backgroundColor: color, height }}
        className={this.returnEventsClassName(position)}
        onClick={this.props.onClick}
      >
        {this.returnEventName(title, position)}
      </div>
    );
  }
}

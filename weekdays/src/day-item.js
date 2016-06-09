import React, {Text, StyleSheet} from 'react-native';

class DayItem extends React.Component {
  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    };
  }

  color({ daysUntil } = this.props) {
    const opacity = !daysUntil ? 1 : 1 / daysUntil;

    return 'rgba(0, 0, 0, ' + opacity + ')';
  }

  fontWeight() {
    const weight = 7 - this.props.daysUntil;

    // The value returned here has to be a string.
    return `${weight * 100}`;
  }

  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }

  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }

  render() {
    return (
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

export default DayItem;

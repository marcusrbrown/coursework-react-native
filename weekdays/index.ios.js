import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Moment from 'moment';

import DayItem from './src/day-item';

class Weekdays extends Component {
  renderDays(day) {
    let dayItems = [];

    for (var i = 0; i < 7; ++i) {
      let day = Moment().add(i, 'days').format('dddd');

      dayItems.push(<DayItem key={day} day={day} daysUntil={i} />);
    }

    return dayItems;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
        {this.renderDays()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('weekdays', () => Weekdays);

import React, {Component} from 'react';
import {
  Container,
  Button,
  Header,
  Text,
  View,
  Item,
  Input,
  Left,
} from 'native-base';
// import Icon from 'react-native-vector-icons/dist/Ionicons';
import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
import styles from './styles/ReduxToDoScreenStyles';

class ReduxToDoScreen extends Component {
  render() {
    const data = [
      {key: 1, label: 'Label 1', leftLabel: 'Left 1', rightLabel: 'Right 1'},
      {key: 2, label: 'Label 2', leftLabel: 'Left 2', rightLabel: 'Right 2'},
      {key: 3, label: 'Label 3', leftLabel: 'Left 3', rightLabel: 'Right 3'},
      {key: 4, label: 'Label 4', leftLabel: 'Left 4', rightLabel: 'Right 4'},
      {key: 5, label: 'Label 5', leftLabel: 'Left 5', rightLabel: 'Right 5'},
    ];

    return (
      <Container style={styles.headerFooter}>
        <Header style={styles.headerFooter}>
          <Left>
            <Text
              style={styles.backText}
              onPress={() => this.props.navigation.goBack()}>
              Back
            </Text>
          </Left>
        </Header>
        <View style={styles.contentView}>
          <Item rounded>
            <Input
              placeholder="Type here..."
              placeholderTextColor="white"
              style={styles.inputText}
            />
            <Button style={styles.addButton}>
              <Text>ADD</Text>
            </Button>
          </Item>
          <SwipeableFlatList
            data={data}
            renderItem={({item}) => (
              <Text style={styles.itemList}>{item.label}</Text>
            )}
            renderLeft={({item}) => (
              <Text
                onPress={() => alert(item.leftLabel)}
                style={styles.swipeCell}>
                Edit
              </Text>
            )}
            renderRight={({item}) => (
              <Text
                onPress={() => alert(item.rightLabel)}
                style={styles.swipeCell}>
                Delete
              </Text>
            )}
            backgroundColor={'#555555'}
            itemBackgroundColor={'#555555'}
            style={styles.flatListBackground}
          />
        </View>
      </Container>
    );
  }
}

export default ReduxToDoScreen;

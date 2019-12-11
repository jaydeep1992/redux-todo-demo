import React, {Component} from 'react';
import {connect} from 'react-redux';
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
import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
import {
  addToDoList,
  updateToDoList,
  deleteToDoList,
} from '../../redux/actions/TaskList';
import styles from './styles/ReduxToDoScreenStyles';

class ReduxToDoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
    };
    // console.log('this.props.task', this.props.taskList);
  }
  render() {
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
              onChangeText={taskName => this.setState({taskName})}
              style={styles.inputText}
            />
            <Button style={styles.addButton} onPress={() => this.addTask()}>
              <Text>ADD</Text>
            </Button>
          </Item>
          <SwipeableFlatList
            data={this.props.taskList}
            renderItem={({item}) => (
              <Text
                style={
                  item.status ? styles.itemListLineThrough : styles.itemList
                }>
                {item.task}
              </Text>
            )}
            renderLeft={({item}) => (
              <Text
                onPress={() => this.renderUpdateItem(item)}
                style={styles.swipeCell}>
                Update
              </Text>
            )}
            renderRight={({item}) => (
              <Text
                onPress={() => this.renderDeleteItem(item)}
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
  addTask() {
    this.props.addTask(this.state.taskName);
  }
  renderUpdateItem(item) {
    this.props.updateTask(item.id);
    console.log('renderEditItem:', item);
  }
  renderDeleteItem(item) {
    // console.log('Item:: ', item);
    this.props.deleteTask(item.id);
  }
}

const mapStateToProps = ({reduxStore}) => ({
  taskList: reduxStore.taskList,
});
const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addToDoList(task)),
  updateTask: key => dispatch(updateToDoList(key)),
  deleteTask: key => dispatch(deleteToDoList(key)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxToDoScreen);

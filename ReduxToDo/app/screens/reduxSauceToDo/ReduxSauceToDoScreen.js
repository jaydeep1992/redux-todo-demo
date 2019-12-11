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
import ToDoListActions from '../../reduxsauce/ToDoListRedux';
import styles from './styles/ReduxSauceToDoScreenStyles';

class ReduxSauceToDoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: '',
      dialogVisible: false,
    };
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
            data={this.props.toDoList}
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

const mapStateToProps = ({reducer}) => ({
  toDoList: reducer.toDoList.toDoList,
});
const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(ToDoListActions.addToDoList(task)),
  updateTask: key => dispatch(ToDoListActions.updateToDoList(key)),
  deleteTask: key => dispatch(ToDoListActions.deleteToDoList(key)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxSauceToDoScreen);

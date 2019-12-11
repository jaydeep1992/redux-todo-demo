import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  headerFooter: {
    backgroundColor: '#697689',
  },
  backText: {
    color: 'white',
  },
  contentView: {
    width: '100%',
    height: '80%',
    padding: 12,
    alignContent: 'center',
    // justifyContent: 'center',
    backgroundColor: '#555555',
  },
  reduxSauceBtn: { marginTop: 12 },
  inputText: { color: 'white' },
  addButton: { backgroundColor: 'transparent' },
  itemList: {
    height: 48,
    backgroundColor: '#555555',
    color: 'white',
  },
  itemListLineThrough: {
    height: 48,
    backgroundColor: '#555555',
    color: 'white',
    textDecorationLine: 'line-through',
  },
  swipeCell: { width: 100, color: 'white' },
  flatListBackground: { marginTop: 25 },
});

export default styles;

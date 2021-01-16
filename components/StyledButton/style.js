import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    // borderWidth: 2,
    // width: '100%',
    // alignSelf: 'flex-end',
    // flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 5,
    alignSelf: 'flex-end',
    width: '100%',
    // borderWidth: 2,
    // flex: 1,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default styles;

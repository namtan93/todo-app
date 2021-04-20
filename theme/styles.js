import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    header: {
      alignItems: 'center',
      backgroundColor: '#F2E7C9',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderTopWidth: 10,
      borderBottomColor: '#A3C4BC',
  },
  
    headerText: {
      fontSize: theme.fontSizes.lg,
      padding: 40,
  },

  containerTodo: {
    justifyContent: 'center',
    marginHorizontal: 10,
    flexDirection: "row", 
    width: "auto",
    backgroundColor: '#E7EFC5',
    borderWidth: 1,
    borderRadius: 50,
    margin: 2,  
    borderStyle: 'solid',
},

textListTodo: {
    fontSize: theme.fontSizes.sm,
    textAlign: 'center',
    padding: 10,
  },

  containerInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
},

textInput: {
    fontSize: theme.fontSizes.md,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    padding: 15,
    textAlign: 'center',  
    width: '80%',
},

addButton: {
    backgroundColor: '#A3C4BC',
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
},

});

export default styles;
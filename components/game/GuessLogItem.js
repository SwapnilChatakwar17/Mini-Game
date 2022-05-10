// import libraries to create components
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

// Create a component that return some jsx/simple function
function GuessLogItem({ roundNumber, guess }) {

// returns the result of layout and UI components.
  return (
    // a container that supports the layout accessibility controls. It is a fundamental component for building the UI.
    <View style={styles.listItem}>
      {/* a React component for displaying text. */}
      {/* a property used for styling the components using StyleSheet. */}
      {/* used to design individual components. */}
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

// export the file, so that we can use it elsewhere in our app
export default GuessLogItem;

// Create a stylesheet to style the component
const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans'
  }
});

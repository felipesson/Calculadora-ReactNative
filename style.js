import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
  backgroundColor: "#0C2742",
  flex:1
  },
  results: {
    backgroundColor: "#0B2639",
    width: '100%',
    flex:1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    

  },
  linha:{
    backgroundColor:'#2CA1FA',
    height:1,
    
  },
  resultText: {
    color: "#fff",
    margin: 10,
    fontSize: 40,
    fontWeight:'bold',
  },
  historyText: {
    color: "#fff",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
    fontWeight:'bold',

  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    color:'#0C2742',
    
  },

  button: {
    backgroundColor: "#0C2742",
    borderColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    minHeight: 90,
    flex: 1,
    borderRadius:50,
    marginBottom:3
  },
  textButton: {
    color: "#fff",
    fontSize: 26,
    
 
  }
});
  export default styles;

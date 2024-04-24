import { StyleSheet } from 'react-native';

export const noteStyles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    // elevation: 4,
    borderWidth:1,
    borderColor:"cyan",
  },
  pressed:{
    borderColor:"orange",
    borderWidth:1,
    opacity:1,
    shadowColor: "yellow",
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 10.84,
    elevation: 50,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'cyan'
  },
  date:{
    color:'orange',
    fontSize:12,
    position:'absolute',
    top:10,
    right:10,
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginBottom:8
  },
  tag: {
    fontSize: 14,
    color: 'lightgreen',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 8,
  },
});

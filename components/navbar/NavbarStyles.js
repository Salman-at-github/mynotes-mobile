import { StyleSheet } from 'react-native';

export const navbarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:10,
    height:50,
    borderWidth:1,
    borderBottomColor:"cyan"
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:"100%"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"white"
  },
  drawer: {
    position: 'absolute',
    top: 60,
    right: 0,
    backgroundColor: 'white',
    padding: 10,
    zIndex: 999,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  drawerText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

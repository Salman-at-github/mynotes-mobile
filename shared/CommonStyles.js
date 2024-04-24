import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
    input: {
        width: '100%',
        height:40,
        borderWidth: 1,
        borderColor: 'white', 
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        color:"cyan",
      },
      button: {
        width: '80%',
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        marginTop:10,
    
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
})
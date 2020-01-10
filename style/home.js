import { StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  productContainer : {
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    backgroundColor: "white",
  },
  scrollProductView : {
    width: '90%',
    alignSelf: 'center',
    borderWidth:1,
    borderColor: '#99BBE4',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",

  },
  scanButtonView : {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: 'rgba(97,145,203,0.3)',
    marginTop: 20,
    marginBottom: 0,
  },
  scanButton: {
    backgroundColor: 'white',
    width: "90%",
    borderRadius: 20,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6191CB',
    padding: 100
 },
 text: {
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
 },
 Titre: {
    textAlign: "center",
    color: '#6191CB',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 26,
    fontWeight: "bold",
    width: '100%',
    backgroundColor: "white",
    
 },
 container2: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  marginTop:30,
},
})
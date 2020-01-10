import React from 'react';
import {Button, Image, ScrollView, TouchableHighlight, Text, TouchableOpacity, View, Modal} from 'react-native';
import {homeStyle} from './style/home';
import {fontsStyle} from "./style/fonts";
import {globalStyle} from "./style/global";
import Header from './Components/header'
import Scanner from './Components/Scanner'
import Items from './Components/items';
import { RNCamera } from 'react-native-camera';


export default class App extends React.Component {

  constructor(){

    super();

    this.state = {
      modalVisible: false, //premier modal - Scan du produit
      isVisible: false, //second modal - Quand on clique sur un produit
      // liste des produits
      products : [
      {id: 1, name : 'Biere de pêcheur', date: new Date(), stores: 'kronenbourg'},
      {id: 2, name : 'Biere d\'homme', date: new Date(), stores: 'grimbergen'},
      {id: 3, name : 'Biere de riche', date: new Date(), stores: 'desperados'},
      {id: 4, name : 'Bière sans alcool', date: new Date(), stores: 'tourtel twist'}
    ]
    }
    //Titre qui apparaît dans le header
    this.title = "Yiko la meilleure application plagiée !"
  }


  
  //Visibilité des modals sur false qui deviennent visible après avoir actionnée la fonction

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  setModalProduitVisible(visible) {
    this.setState({modalProductVisible: visible});
  }

  //Fonction qui lance la fonction HandleBarRead qui va ajouter par la suite notre produit scanné à la liste

  handleScanPress = async (id) => {
    
    this._handleBarCodeRead({type: 'EAN', data:'8000500037560'})
  };

  //Fonction qui affiche le Second modal -- celui de la page d'informations

  handleProductPress = () => {
    this.setState({ isVisible: true})
  };


  //requête API

  async getProductFromApi(barcode) {
    try {
      let response = await fetch(
          'https://fr.openfoodfacts.org/api/v0/produit/' + barcode + '.json'
      );
      let responseJson = await response.json();
      return responseJson.product;
    } catch (error) {
      console.error(error);
    }
  }

  /*
  Appelée quand la caméra a détecté un code barre,
  testez vous même !
   */
  async _handleBarCodeRead ({ type, data }) {
    // On récupère le produit scanné
    let scannedProduct = await this.getProductFromApi(data);
 
    // On crée un nouvel obj. produit
    let newProduct = {id: 1, name: scannedProduct.product_name, date: new Date() ,stores: scannedProduct.stores};
 
    let _products = this.state.products; // récupération de la liste actuelle
 
    console.log(scannedProduct);
    console.log(newProduct);
 
    _products.push(newProduct); // ajout du nouveau produit
    this.setState({products : _products}); // on set les nouveau produits dans le state
    this.setState({modalScanVisible: false});
  };


  render() {


    return (
      <View style={globalStyle.container}>
        <Header title={this.title}/>


         {/*Scrollview composée de notre liste de produits*/}
        <ScrollView style={homeStyle.scrollProductView}>
          {
           this.state.products.map(
               (produit) => {
                 return (
                     <Items product={produit} key={produit.id} onPressItem={this.handleProductPress} />
                 )
               }
           )
          }
        </ScrollView>

           {/*Premier Modal*/}

        <Modal
          animationType="slide"
          transparent={false}
          visible= {this.state.modalVisible} //Etat sur false
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View >
              <Text style={{textAlign: "center", marginBottom: 20}}>Yuki</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible); //Etat du visible sur True
                  this.handleScanPress; //Permet de lancer le scan (donc l'ajout du code bar Kinder Bueno)
                }}>
                <Text style={{textAlign: "center", paddingVertical: 20, backgroundColor: "grey"}}>Kinder Bueno Scanné avec succer, Appuyer ici pour retourner à l'accueil</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

          {/* Création Bouton Scanner + ajout du code bar qui remplace l'appareil photo */}

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
            this._handleBarCodeRead({type: 'EAN', data:'8000500037560'})
          }} style={homeStyle.scanButtonView}>
            <View style={homeStyle.scanButton}>
          <Text>Scanner</Text></View>
        </TouchableHighlight>

          {/* Création du Modal "Information Produit" */}

        <View>
          <Modal animationType = {"slide"} transparent = {false}
              visible = {this.state.isVisible}
              onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
              <View style = {homeStyle.modal}> 

                {/* Ajout des informations au Modal */}

                <Text style = {homeStyle.Titre}>Nom:</Text>
                <Text style = {homeStyle.text}>{this.state.products[this.state.products.length -1].name}</Text>
                <Text style = {homeStyle.Titre}>Store:</Text>
                <Text style = {homeStyle.text}>{this.state.products[this.state.products.length -1].stores}</Text>
              <View style={homeStyle.scanButton}>
              <TouchableHighlight onPress = {() => {
                        this.setState({ isVisible:!this.state.isVisible})}}>
                <Text>Retourner à l'accueil</Text></TouchableHighlight></View>
                  </View>
          </Modal>
        </View>
      </View>
    )
  }
}
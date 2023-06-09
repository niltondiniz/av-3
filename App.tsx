import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const imageList = [
    'https://classic.exame.com/wp-content/uploads/2021/12/BAYCcortado.png?w=723',
    'https://s2.glbimg.com/6fLjMPYo50gB1llNwE11EVXdf8w=/620x430/e.glbimg.com/og/ed/f/original/2022/02/21/https___hypebeast.com_image_2021_10_bored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg',
    'https://conteudo.imguol.com.br/c/noticias/74/2022/06/06/bored-ape-nft-que-integra-a-colecao-do-bored-ape-yacht-club-1654521934017_v2_4x3.jpg'
  ];

  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFT</Text>
      <Image style={styles.image} source={{uri:imageList[index]}}/>
      <TouchableOpacity style={styles.button} onPress={()=>{changeImage()}} >
        <Text style={styles.buttonText}>Click!</Text>
      </TouchableOpacity>
    </View>
  );

    function changeImage(){
      if(index === 2){
        setIndex(0);
      }else{
        setIndex(index + 1);
      }
    }

}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image:{
    width:'90%',
    height: 200,
    borderRadius: 17
  },
  title:{
    fontSize: 50,
    fontWeight: '700',
    color: '#fff'
  },
  button:{
    width: 75,
    height: 75,
    borderRadius: 37,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deeppink',
    marginLeft: 200
  },
  buttonText:{
    fontSize: 15,
    fontWeight: '700'
  },
});

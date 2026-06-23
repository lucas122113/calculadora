import { StyleSheet, Text, View, Image } from 'react-native';



export default function ComponentImagem(props){
 
    return(
        <View>
            <Image
                source={{uri:props.Image}}
                style={{width:600, height:450}}
                resizeMode='contain' 
                /> 
        </View>



    )

}

export default function ComponentContainer(){

    return(
        <View>




        </View>

    )
}
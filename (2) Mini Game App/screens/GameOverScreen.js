import { View,StyleSheet,Image,Text, Dimensions,useWindowDimensions,ScrollView } from "react-native"
import Title from "../components/ui/Title"
import PrimaryButton from "../components/ui/PrimaryButton"
import  Colors  from "../constants/colors"
function GameOverScreen({roundsNumber,userNumber,onStartNewGame}){
    const {width,height}=useWindowDimensions()
    let imageSize=300
    if (width<380){
        imageSize=150
    }
    if (height<400){
        imageSize=80
    }
    const imageStyle={
        width:imageSize,
        height:imageSize,
        borderRadius:imageSize/2
    }
    return (
        <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>GAME OVER!!!</Title>
            <View style={[styles.imageContainer,imageStyle]}>
                  <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text style={styles.summaryText}>Your phone needed
                <Text style={styles.highlight}> {roundsNumber} </Text> 
                rounds to guess 
            <Text style={styles.highlight}> {userNumber} </Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
        </ScrollView>
    )
}
export default GameOverScreen
// const deviceWidth=Dimensions.get('window').width
const styles=StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:24,
    },
    imageContainer:{
        // height:deviceWidth<380 ? 150 :300,
        // width: deviceWidth<380 ? 150 :300,
        color:Colors.primary800,
        overflow:"hidden",
        // borderRadius:deviceWidth<380 ? 75 :300,
        margin:36,
        borderWidth:3,
    },
    image:{
        height:"100%",
        width:"100%"
    },
    summaryText:{
        fontFamily:"open-sans",
        fontSize:20,
        textAlign:"center",
        marginBottom:24
    },
    highlight:{
        fontFamily:"open-sans-bold",
        color:Colors.primary500,
    }
})
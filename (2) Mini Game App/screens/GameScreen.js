import { View , StyleSheet, Alert, FlatList,useWindowDimensions} from "react-native"
import Title from "../components/ui/Title"
import { useState ,useEffect} from "react"
import {useFonts} from "expo-font";
import {AntDesign} from "@expo/vector-icons"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"
import Card from "../components/ui/Card"
import InstructionsText from "../components/ui/InstructionsText"
import GuessLogItem from "../components/game/GuessLogItem";

 function generateRandomNumber(min,max,exclude){
        const rndNum=Math.floor(Math.random()*(max-min))+min
        if (rndNum===exclude){
            generateRandomNumber(min,max,exclude)
        } else{
            return rndNum
        }
    }
    let minBoundary=1;
    let maxBoundary=100;
function GameScreen({userNumber,onGameOver}){
    const initialGuess=generateRandomNumber(1,100,userNumber)
    const [currentGuess,setCurrentGuess]=useState(initialGuess)
    const [guessRounds,setGuessRounds]=useState([initialGuess])

    useEffect(()=>{
        if (currentGuess===userNumber){
            onGameOver(guessRounds.length)
        }
    },[currentGuess,userNumber,onGameOver])

    useEffect(()=>{
        minBoundary=1,
        maxBoundary=100
    },[])
    
    function nextGuessHandler(direction){
        if ((direction=='lower' && currentGuess<userNumber) ||
        (direction=='greater' && currentGuess>userNumber)){
            Alert.alert("Don't lie. You know that this is wrong...."),[
              {
                text:'Sorry',
                style:'cancel'
              }  
            ]
            return
        }
        if (direction=='lower'){
            maxBoundary=currentGuess
        } else{
            minBoundary=currentGuess+1
        }
        const newRndNumber = generateRandomNumber(minBoundary,maxBoundary,currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRounds(prevGuessRounds=>[newRndNumber,...prevGuessRounds])
    }

    const guessRoundsListLength=guessRounds.length;
    const {height,width}=useWindowDimensions()
    let content=<>
     <NumberContainer>{currentGuess}</NumberContainer>
     <Card>
           <InstructionsText style={styles.instructionsText}>Higher or Lower</InstructionsText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
 <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
    <AntDesign name="minus" size={24} color="white" />
    </PrimaryButton>
                </View>
           <View style={styles.buttonContainer}>
<PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
    <AntDesign name="plus" size={24} color="white" />
</PrimaryButton>
           </View> 
            </View>
        </Card>
    </>

    if (width>500){
        content= (
            <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <AntDesign name='minus' size={24} color='white' />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <AntDesign name='plus' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </>
        )
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
    {content}
        <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength-itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
        </View>
    )
}
export default GameScreen
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
        alignItems:'center'
    },
    instructionsText:{
        marginBottom:12,
    },
   buttonsContainer:{
        flexDirection:'row',
    },
    buttonsContainerWide:{
        flexDirection:"row",
        align:"center"
    },
    buttonContainer:{
    flex:1,
    },
    listContainer: {
    flex: 1,
    padding: 16,
  },
})
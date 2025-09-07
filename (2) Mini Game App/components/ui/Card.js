import { View, StyleSheet, Dimensions } from "react-native"
import Colors from "../../constants/colors"
function Card({children}){
    return (
         <View style={styles.card}>
            {children}
        </View>
    )
}

const deviceWidth=Dimensions.get('window').width
export default Card
const styles=StyleSheet.create({
     card:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:deviceWidth<380 ? 18 : 36,
    marginHorizontal:16,
    padding:16,
    backgroundColor:Colors.primary800,
    borderRadius:8,
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:1
    },
})
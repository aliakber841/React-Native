import {View,Text,StyleSheet, Button} from "react-native"
function UserScreen({navigation}){
    function openDrawerHandler(){
        navigation.toggleDrawer()
    }
    return (
        <View>
            <Text>This Screen belongs to User</Text>
            <Button title="Open Drawer" onPress={openDrawerHandler}/>
        </View>
    )
}
export default UserScreen
const styles=StyleSheet.create({
    root:{
        flex:1
    }
})
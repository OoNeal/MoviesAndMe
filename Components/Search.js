import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'


const styles = StyleSheet.create({
    textinput: {
        margin: 'auto',
        fontSize: 15,
        textAlign: "center",
        height: 40,
        borderWidth: 1,
        paddingLeft: 5,
    },
    view: {
        marginTop: 40,
        backgroundColor:"#212121"
    }
  
})

class Search extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <TextInput style={styles.textinput} placeholderTextColor='white' placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => {}} />
            </View>
        )
    }
}

export default Search
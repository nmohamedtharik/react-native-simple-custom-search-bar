import React from 'react';
import {AppRegistry, Keyboard, StyleSheet, Text, View} from 'react-native';
import SearchBar from "./assets/pages/SearchBar";

export default function App() {
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder={"Enter to search"}
                value={"word"}
                disableSearchBtnStyle={{}}
                onBackPress={() => {
                    Keyboard.dismiss();
                }}
                onSubmit={(text) => {
                    alert(text);
                }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: "flex-start",
        justifyContent: 'flex-start',
    }
});

AppRegistry.registerComponent('main', () => App);

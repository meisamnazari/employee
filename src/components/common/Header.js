// Import libraries

import React from'react';

import { Text, View } from'react-native';


// Make a component

const Header=(props)=>{

const { textStyles, viewStyles }= styles;

    return (
        <View style={viewStyles}>
         <Text style={textStyles}>{props.headerText}</Text>
        </View>
    );

};


// Styles

const styles={
    viewStyles:{
        backgroundColor:'F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{widget:0,height:20},
        shadowOpacity:0.2
    },
    textStyles:{
        fontSize:20
    }
};


// make the component applicable for the other parts
 export  {Header};

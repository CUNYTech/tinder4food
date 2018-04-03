import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Button = (props) => {
    const { onPress, buttonText, buttonStyle, buttonTextStyle, buttonImage, buttonImageStyle  } = props;
    return (
        <View>
            <TouchableOpacity
                style={buttonStyle}
                onPress={onPress}
            >
                <Image 
                    style={buttonImageStyle}
                    source={buttonImage}
                />
                <Text
                    style={buttonTextStyle}
                >{buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};


export default Button;

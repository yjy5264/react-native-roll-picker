/**
 * Created by yjy on 2016/12/26.
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {CSS} from './CSS'

export default class PickerSpace extends Component {
    render() {
        return(
            <View style = {{width: CSS.pixel(30), height: 225, alignItems: 'center', justifyContent: 'center'}}>
                <View style = {{width: CSS.pixel(30), height: CSS.pixel(1), backgroundColor: '#a2a2a2'}} />
                <View style = {{width: CSS.pixel(30), height: 24, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style = {{fontSize: CSS.pixel(28), color: '#000000'}}>{this.props.text}</Text>
                </View>
                <View style = {{width: CSS.pixel(30), height: CSS.pixel(1), backgroundColor: '#a2a2a2'}} />
            </View>
        )
    }
}
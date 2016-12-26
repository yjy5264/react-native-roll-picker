/**
 * Created by yjy on 2016/12/26.
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import Picker from '../lib/Picker'
import cityCode from './ChinaCityCode'

export default class CityPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.rowIndex0 = 0;
        this.rowIndex1 = 0;
        this.rowIndex2 = 0;
    }

    render() {
        return (
            <View style = {{height: 225, flexDirection: 'row'}}>
                <View style = {{flex: 0.9}}>
                    <Picker 
                        data = {cityCode.CityZoneCode.China.Province}
                        ref = '_Picker0'
                        name = 'name'
                        onRowChange = {index => {
                            this.rowIndex0 = index; 
                            this.rowIndex1 = 0; 
                            this.rowIndex2 = 0; 
                            this.refs._Picker1.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City); 
                            this.refs._Picker2.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City[0].Area)}}
                    />
                </View>
                <View style = {{flex: 1}}>
                    <Picker 
                        data = {cityCode.CityZoneCode.China.Province[0].City} 
                        ref = '_Picker1'
                        name = 'name'
                        onRowChange = {index => {
                            this.rowIndex1 = index; 
                            this.rowIndex2 = 0; 
                            this.refs._Picker2.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City[this.rowIndex1].Area)}}
                    />
                </View>
                <View style = {{flex: 1}}>
                    <Picker 
                        data = {cityCode.CityZoneCode.China.Province[0].City[0].Area}
                        ref = '_Picker2'
                        name = 'name'
                        onRowChange = {index => this.rowIndex2 = index}
                    />
                </View>
            </View>
        )
    }
}
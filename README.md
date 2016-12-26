# react-native-roll-picker
A cross-platform (iOS&amp;Android), selector/picker component for React Native.
<br>Demo
------
<br>![](https://github.com/yjy5264/react-native-roll-picker/raw/master/image/picker.gif)
<br>Install
------
```javascript
npm install react-native-roll-picker --save
```
<br>Props
------
```javascript
data = {a: 'bbb'} // json type
name = 'a' // json name with {a: 'bbb'}
onRowChange = {index => {}} // when row changed, return the index
```
<br>Function
------
```javascript
ref.setDataSource(json) // reset data with json
```
<br>Usage
------
```javascript
<Picker 
    data = {json}
    ref = '_Picker'
    name = 'jsonName'
    onRowChange = {index => {}}
/>

this.refs._Picker.setDataSource(json); 
```

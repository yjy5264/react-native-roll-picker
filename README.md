# react-native-roll-picker
A cross-platform (iOS&amp;Android), selector/picker component for React Native.
<br>
------
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
data = [{a: 'bbb'}] // json type array
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
import Picker from 'react-native-roll-picker'

<Picker 
    data = [{a: 'bbb'}]
    ref = '_Picker'
    name = 'a'
    onRowChange = {index => {}}
/>

this.refs._Picker.setDataSource(json); 
```

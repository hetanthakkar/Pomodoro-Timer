import * as React from 'react';
import {Button, Text, View, StyleSheet,Vibration } from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1497FF',
    justifyContent:'space-around',
    fontSize:50,
  },
  paragraph: {
    color:'white',
    margin: 24,
    fontSize: 38,
    fontWeight: 'bold',
  },
  text:{
      color:'white',

    fontSize:54,
    fontWeight:'Bold',
    fontFamily:'sans-serif'
  },
  button:{
    color:'red'
  }

});
const workTime=2*5
const relaxTime=5*3
var seconds,minutes,temp=0
export default class App extends React.Component {
  state={
  text:"Work Time",
  pause:true,
  count:0,
  }
  componentDidMount(){
  setInterval(()=>this.third(),1000)
  }

  getMin=()=>{
  temp=this.getSec()
  if(temp===0&&this.state.count!==0)
  minutes++
  if(this.state.count===0)
  minutes=0
  return minutes
  }
  getSec=()=>{
  if(this.state.count<=60)
  seconds=this.state.count
  seconds=this.state.count%60
  return seconds
  }
  
  third= ()=>{
  this.incs()
  if(this.state.count===relaxTime){
  this.changeText()
Vibration.vibrate(1500);
var calling =  async function () {
 await new Promise(resolve => setTimeout(resolve, 1000)); }
 calling()
Vibration.vibrate(1000);
  }
  if(this.state.count===relaxTime+workTime)
  this.reset()
  }

  incs=()=>{
    {
      if(this.state.pause==false)
      this.setState(prevState=>({count:prevState.count+1}))}
  }

 reset=()=>{
            this.setState(prevState=>({pause:!prevState.pause}))
            this.setState({count:0,text:"Work Time"})
 };
pause=()=>{
  if(this.state.count===0)
  this.reset()
       this.setState(prevState=>({pause:!prevState.pause}));
};
changeText=()=>{
   this.setState({text:"Break Time"})
};

  render() {
     return(
      <View style={styles.container}>
      <Text style={styles.text}>{this.state.text}</Text>
      <Button title="Start Reset " onPress={() => this.reset()}/>
      <Button style={styles.button}title="Pause Resume " onPress={() => this.pause()} />
      <Text style={styles.paragraph}>
      {this.getMin()}:{this.getSec()}
      </Text>
      </View>
    );
  }
}
 


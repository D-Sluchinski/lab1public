import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { vacation_location, vacation_price } from './app/vacations';

export default function App() {
  //typescript is javascript that has types

  type Person ={
    name: String;
    age: Number;
    occupation: String,
    isEmployed?: Boolean,
    hobbies:  (String | Number)[];
    address?: {street: String; city: String; state: String}; //put ? because i dont want to put it in person2
    vacation_location_value?: String; // question mark just so it's ok to not have
    vacation_price_value?: String;
  };

      
  interface PersonInterface { 
    name: String;
    age:Number;
    occupation: String;
    isEmployed: Boolean;
    hobbies: (String | Number)[];
    address: {street: String; city: String; state: String};
  };

  

  //*** */
  // type Person1 ={ 
  //   name: String,
  //   age: Number,
  //   occupation: String,
  //   hobbies: (String | number)[],
  //   address: (String)[],
  // };



  //const name = "John Doe"; to do type script use tge one below
  const name: string = "John Doe";
  let occupation:string = "Software Developer";
  const age: number = 30;
  let isEmployed: boolean= true;
  //array
  //const hobbies: string[] = ["Reading", "Coding", "Traveling"];
  //use any for anything or
  //const hobbies: any[] = ["Reading", "Coding", "Traveling", 4];
  const hobbies: (string | number)[] = ["Reading", "Coding", "Traveling", 4];

  const address: {street: string; 
                  city: string; 
                  state: string} = {
  street: "123 Main Street",
  city: "New York",
  state: "NY", 
  } as typeof address;



  //try to NOT use
  const secondAddress = {
    street: "123 Main Street",
    city: "New York",
    state: "NY", };



    const person1: PersonInterface ={ 
    name,
    age,
    occupation,
    isEmployed,
    hobbies,
    address,
  };

  const person2: Person = {name: "Jane Doe", age: 25, occupation:"Nurse", isEmployed: true, hobbies: ["Reading", "drawing"],
     vacation_location_value: vacation_location("Paris"),
    vacation_price_value: vacation_price(500, "Paris"),
     }

  const personlist = [person1, person2];

  return (
    
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to my application</Text>
      <Text style={styles.text}>Hello {person2.name}.  You are going to {person2.vacation_location_value}. 
        {person2.vacation_price_value}</Text>
      <Text></Text>
      
      <View>

      <TouchableOpacity onPress={()=>{alert("weekend is the best")}}>
        <Text>Click Me</Text>
        </TouchableOpacity>
      </View>

      </View>
 <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
   title: {
    fontSize: 24,
    fontWeight: "bold",

    },
  text: {
    color: "#CD5C5C",
    //color: "#00007f",
    fontSize: 16,
  }
  
});

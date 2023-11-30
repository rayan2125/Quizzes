import { StyleSheet, Text, FlatList, View, Dimensions, TouchableOpacity } from 'react-native';
import Card from '../component/card';
import Icon from "react-native-vector-icons/FontAwesome5"

const Home = () => {
  const numColumns = 2;
  const std = ["5", "6", "7", "8", "9", "10", "11", "12"];
  const evenName = ["Up Coming", "History", "Notifications", "Meetings", "Study", "Other Activities"];

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 20 - 10 * (numColumns - 1)) / numColumns; // Considering 20 as total horizontal padding and 10 as margin between cards

  return (
    <>
      <View style={{ width: '100%', backgroundColor: '#14213d', borderBottomLeftRadius: 18, borderBottomRightRadius: 18 }}>
        <View style={{
          height: 70,

          flexDirection: "row",
          justifyContent: "center",
          width: '50%',
          alignItems: 'center',
        }}>
          <View style={{ marginHorizontal: 20 }}>
            <TouchableOpacity>

              <Icon name="bars" size={25} color="white" />
            </TouchableOpacity>

          </View>
          <Text style={{ color: 'white', fontSize: 25 }}>
            Cbse Exam
          </Text>

        </View>
      </View>

      <View style={{ flex: 1, padding: 5, margin: 5 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>

          {/* <Text style={{ color: 'black', fontSize: 26 }}>Class 6 to 12 exam</Text> */}
        </View>
        <FlatList
          data={evenName}
          style={{ flex: 1, padding: 5 }}
          numColumns={numColumns}
          contentContainerStyle={{ paddingHorizontal: 10 }} // Adjust the container's horizontal padding
          renderItem={({ item, index }) => {
            return (
              <Card
              nameIcon={item}
              key={index}
              classNumber={item}
              stdName={item}
              cardWidth={cardWidth} // Pass cardWidth as a prop to Card component
              
              
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>

  );
};

export default Home;

const styles = StyleSheet.create({});

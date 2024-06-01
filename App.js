import React, { useState, useRef } from "react";
import { StyleSheet, Image, Text, View, TextInput, Button, ScrollView, FlatList, Animated } from "react-native";

export default function Task() {
  const [searchQuery, setSearchQuery] = useState("");
  const scrollY = useRef(new Animated.Value(0)).current;

  const tasks = [
    { key: '1', task: 'Mobile App Development' },
    { key: '2', task: 'Web Development' },
    { key: '3', task: 'Push Ups' },
    { key: '4', task: 'Study' },
    { key: '5', task: 'Exercise' },
    { key: '6', task: 'Read a Book' },
    { key: '7', task: 'Write an Article' },
    { key: '8', task: 'Practice Coding' },
    { key: '9', task: 'Learn a New Language' },
    { key: '10', task: 'Yoga' },
    { key: '11', task: 'Cook Dinner' },
    { key: '12', task: 'Attend Meeting' },
    { key: '13', task: 'Clean the House' },
    { key: '14', task: 'Call a Friend' },
    { key: '15', task: 'Plan Vacation' },
  ];

  const categories = [
    { key: '1', title: 'Exercise', tasks: '12 Tasks', imageUri: require('./assets/exercise.jpg') },
    { key: '2', title: 'Study', tasks: '12 Tasks', imageUri: require('./assets/study.jpg') },
    { key: '3', title: 'Fitness', tasks: '8 Tasks', imageUri: require('./assets/fitness.jpg') },
    { key: '4', title: 'Hobbies', tasks: '5 Tasks', imageUri: require('./assets/hobby.jpg') },
    { key: '5', title: 'Household', tasks: '3 Tasks', imageUri: require('./assets/household.jpg') },
    { key: '6', title: 'Shopping', tasks: '4 Tasks', imageUri: require('./assets/shopping.jpg') },
    { key: '7', title: 'Cooking Adventures', tasks: '6 Tasks', imageUri: require('./assets/cooking.jpg') },
    { key: '8', title: 'Reading List', tasks: '7 Tasks', imageUri: require('./assets/reading.jpg') },
  ];

  const handleAddTask = () => {
    console.log("Add Task pressed");
  };

  const categoryFontSize = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [20, 32],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.Task}>
      <Animated.ScrollView
        contentContainerStyle={styles.ScrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.Header}>
          <View style={styles.Frame1}>
            <View style={styles.Group1}>
              <Text style={styles.HelloDevs}>Hello, Devs</Text>
              <Text style={styles._14TasksToday}>14 tasks today</Text>
            </View>
            <Image
              style={styles.ProfileImage}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8bult9z5lx-1%3A13?alt=media&token=a6466223-6168-457c-b23f-c2748bcb0d09",
              }}
            />
          </View>
          <View style={styles.Search3}>
            <TextInput
              style={styles.SearchBox}
              onChangeText={setSearchQuery}
              value={searchQuery}
              placeholder="Search"
            />
            <Image
              style={styles.Filter}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8bult9z5lx-1%3A31?alt=media&token=b1c835a2-aacf-4323-a440-5169b3102372",
              }}
            />
          </View>
        </View>
        <Animated.Text style={[styles.Categories, { fontSize: categoryFontSize }]}>Categories</Animated.Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.HorizontalScrollView}>
          {categories.map((category) => (
            <View key={category.key} style={styles.CategoriesCard}>
              <View style={styles.Group7}>
                <Text style={styles.CategoryTitle}>{category.title}</Text>
                <Text style={styles.CategoryTasks}>{category.tasks}</Text>
              </View>
              <Image
                style={styles.CategoryImage}
                source={category.imageUri}
              />
            </View>
          ))}
        </ScrollView>
        <Text style={styles.OngoingTask}>Ongoing Task</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.OngoingTasksCards}>
              <Text style={styles.MobileAppDevelopment}>{item.task}</Text>
            </View>
          )}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.FlatListContent}
        />
      </Animated.ScrollView>
      <View style={styles.ButtonContainer}>
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Task: {
    flex: 1,
    backgroundColor: "rgba(247,240,232,1)",
  },
  ScrollViewContent: {
    paddingBottom: 80, // Ensures there is space for the button
  },
  Header: {
    paddingHorizontal: 20,
    backgroundColor: "rgba(247,240,232,1)",
  },
  Frame1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  Group1: {
    flex: 1,
  },
  HelloDevs: {
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    fontWeight: "700",
  },
  _14TasksToday: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontWeight: "500",
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  Search3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  SearchBox: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderColor: "rgba(232,209,186,1)",
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: "rgba(251,249,247,1)",
  },
  Filter: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  Categories: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  HorizontalScrollView: {
    marginBottom: 20,
  },
  CategoriesCard: {
    marginRight: 10,
    padding: 14,
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
  },
  Group7: {
    marginBottom: 10,
  },
  CategoryTitle: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontWeight: "700",
  },
  CategoryTasks: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
  },
  CategoryImage: {
    width: 151,
    height: 132,
    borderRadius: 10,
  },
  OngoingTask: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  FlatListContent: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Ensures there is space for the button
  },
  OngoingTasksCards: {
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(232,209,186,1)",
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
    marginBottom: 10,
  },
  MobileAppDevelopment: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontWeight: "700",
  },
  ButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(247,240,232,1)',
    borderRadius: 15,
    paddingVertical: 10,
  },
});

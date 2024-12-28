import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';
// Static imports for images
import coffeeIcon from './../../assets/categoryicons/coffee.png';
import lunchIcon from './../../assets/categoryicons/lunch.png';
import dinnerIcon from './../../assets/categoryicons/dinner.png';
import snacksIcon from './../../assets/categoryicons/snacks.png';
import dessertsIcon from './../../assets/categoryicons/desserts.png';
import appetizersIcon from './../../assets/categoryicons/appetizers.png';
import drinksIcon from './../../assets/categoryicons/drinks.png';
import brunchIcon from './../../assets/categoryicons/brunch.png';
import ComponentHeader from './SubComponents/ComponentHeader';

const Category = () => {
  const foodCategories = [
    {category: 'Breakfast', icon: coffeeIcon},
    {category: 'Lunch', icon: lunchIcon},
    {category: 'Dinner', icon: dinnerIcon},
    {category: 'Snacks', icon: snacksIcon},
    {category: 'Desserts', icon: dessertsIcon},
    {category: 'Appetizers', icon: appetizersIcon},
    {category: 'Drinks', icon: drinksIcon},
    {category: 'Brunch', icon: brunchIcon},
  ];

  const [selectedCategory, setSelectedCategory] = useState(foodCategories[0]);

  return (
    <View>
      <ComponentHeader title={"Categories"}/>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}>
        {foodCategories.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item)}
              key={index}
              style={[
                styles.categoryItems,
                item.category === selectedCategory.category &&
                  styles.selectedCategoryStyle,
              ]}>
              <Image style={{width: 35, height: 35}} source={item.icon} />
              <Text
                style={[
                  {fontFamily: fonts.regular},
                  item.category === selectedCategory.category && {
                    color: '#fff',
                  },
                ]}>
                {item.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedCategoryStyle: {
    backgroundColor: colors.secondaryTheme,
  },
  categoryItems: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5,
    shadowOffset:{
      width: 1,
      height: 1
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 2
  },
  categoryContainer: {
    paddingVertical: 10,
  },
});

export default Category;

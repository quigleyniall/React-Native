import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";

export const addPlace = (placeName, location) => {
  return dispatch => {
    const placeData = {
      name: placeName,
      location: location
    };
    // fetch("https://react-native-pro-1543318711113.firebaseio.com/places.json", {
    //   method: "POST",
    //   body: JSON.stringify(placeData)
    // })
    //   .catch(err => console.error(err))
    //   .then(res => res.json())
    //   .then(parsedResp => {
    //     console.log(parsedResp);
    //   });
  };
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};

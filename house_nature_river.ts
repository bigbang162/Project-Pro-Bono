import { Platform,Alert } from 'react-native';
import { checkInternetConnection } from 'react-native-offline';

// import all components into the file
import React, { Component } from 'react';
import { Image,View,TouchableOpacity,Text,StyleSheet,ScrollView, ImageBackground } from 'react-native';

// Create the reducer to store state
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// define all action types
const SET_TITLE = 'SET_TITLE';
const FETCH_PROJECTS = 'FETCH_PROJECTS';
const SET_SORT_OPTIONS = 'SET_SORT_OPTIONS';

// define the redux actions
const setTitle = (title) => ({
  type: SET_TITLE,
  payload: title
});

const fetchProjects = (projects) => ({
  type: FETCH_PROJECTS,
  payload: projects
});

const setSortOptions = (options) => ({
  type: SET_SORT_OPTIONS,
  payload: options
});

// define the redux store
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

// define all API endpoints
const homeScreenUrl = 'http://www.projectprobono.com/api/index.php';
const projectListUrl = 'http://www.projectprobono.com/api/projects.php';
const sortOptionsUrl = 'http://www.projectprobono.com/api/sortOptions.php';

class ProjectProBono extends Component {
  state = {
    title: '',
    projects: [],
    sortOptions: [],
    isConnected: false,
    isLoading: true
  };

  componentDidMount() {
    this.checkConnection();
    this.fetchData();
  }

  // check for internet connection
  checkConnection = async () => {
    const isConnected = await checkInternetConnection();
    this.setState({
      isConnected
    });
    if (!isConnected) {
      Alert.alert(
        'Internet Connection Error',
        'No internet connection was detected. Please connect to the internet and try again',
        [{ text: 'OK' }]
      );
    }
  };

  // Fetch all data needed for the project
  fetchData = async () => {
    const { isConnected } = this.state;
    if (isConnected) {
      const homeScreenResponse = await fetch(homeScreenUrl);
      const homeScreenData = await homeScreenResponse.json();
      const title = homeScreenData.title;
      this.setState({ title });

      // fetch the projects
      const projectListResponse = await fetch(projectListUrl);
      const projects = await projectListResponse.json();
      this.setState({ projects });

      // fetch the sort options
      const sortOptionsResponse = await fetch(sortOptionsUrl);
      const sortOptions = await sortOptionsResponse.json();
      this.setState({ sortOptions });
    }
    this.setState({ isLoading: false });
  };

  // handle sorting
  handleSort = (index) => {
    this.setState((prevState) => {
      const { projects } = prevState;
      const sortedProjects = [...projects].sort((a, b) => {
        let result = 0;
        if (a[index] < b[index]) {
          result = -1;
        } else if (a[index] > b[index]) {
          result = 1;
        }
        return result;
      });
      return {
        projects: sortedProjects
      };
    });
  };

  // render the view
  render() {
    const { title, projects, sortOptions, isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <ScrollView>
        <ImageBackground
          source={require('./assets/bg.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <Text style={styles.textStyleTitle}>{title}</Text>
            <View>
              {sortOptions &&
                sortOptions.map((sortOption, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => this.handleSort(index)}
                    >
                      <Text style={styles.textStyleOptions}>
                        {sortOption}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
            {projects &&
              projects.map((project, index) => {
                return (
                  <View key={index} style={styles.project}>
                    <Text style={styles.textStyle}>{project[0]} </Text>
                    <Text style={styles.textStyle}>{project[1]}</Text>
                    <Text style={styles.textStyle}>{project[2]}</Text>
                  </View>
                );
              })}
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.OS === 'ios' ? '100%' : '100%',
    resizeMode: 'stretch'
  },
  textStyleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  textStyleOptions: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  project: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white'
  }
});

export default ProjectProBono;
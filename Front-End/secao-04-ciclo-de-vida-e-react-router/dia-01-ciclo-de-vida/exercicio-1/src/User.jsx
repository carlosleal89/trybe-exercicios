import React, { Component } from "react";

class User extends Component {
  state = {
    data: [],
    loading: true,
  };

  fetchUserData = async () => {
    const endPoint = "https://api.randomuser.me/";
    const requestUserData = await fetch(endPoint);
    const userData = await requestUserData.json();
    this.setState({
      data: userData.results[0],
      loading: false,
    });
  };

  componentDidMount() {
    this.fetchUserData();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.data.registered.age > 50) return false;
    return true;
  }

  render() {
    const { data, loading } = this.state;
    const {
      name,
      picture,
      email,
      registered,
    } = data;
    const loadingElement = <div>Carregando...</div>;
    return (
      <div>
        {loading ? (
          loadingElement
        ) : (
          <div>
            <img src={picture.large} alt='foto guerreiro'/>
            <p>{`${name.first} ${name.last}`}</p>
            <p>{email}</p>
            <p>{registered.age}</p>
          </div>
        )}
      </div>
    );
  }
}

export default User;

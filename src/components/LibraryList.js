import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// É executada pelo connect recebendo o state
// mapeia o state para uma prop no component atual
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// Chama mapStateToProps passando o state e depois 
// mapeia como uma prop no componente passado no segundo parâmetro
export default connect(mapStateToProps)(LibraryList);

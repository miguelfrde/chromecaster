import React from 'react';
import path from 'path';
import { connect } from 'react-redux';
import { Styles } from 'material-ui';
import PhotoItem from './PhotoItem.jsx';
import { filesInDirByExtensions } from '../utils';

const ThemeManager = new Styles.ThemeManager();

@connect(state => ({
  photosPath: state.photosPath
}))
export default class PhotosContainer extends React.Component {
  constructor(props) {
    super(props);
    this._loadPhotos = this._loadPhotos.bind(this);
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _loadPhotos() {
    const extensions = ['.jpg', '.jpeg', '.png'];
    return filesInDirByExtensions(this.props.photosPath, extensions);
  }

  render() {
    const photos = this._loadPhotos();
    const style = {
      container: {
        marginTop: 0,
        width: '100%',
        float: 'left',
        overflow: 'scroll',
        height: 582,
        padding: '0 3%'
      }
    }
    return (
      <div style={style.container}>
        { photos.map((photo, index) =>
          <PhotoItem key={index} path={path.join(this.props.photosPath, photo)}/>
        )}
      </div>
    );
  }
}

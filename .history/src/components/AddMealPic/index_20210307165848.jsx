import React from 'react';
import { ImagePicker } from 'antd-mobile';

import './index.css'
const data = [];

class AddMealPic extends React.Component {
  state = {
    files: data,
  };
  onChange = (files, type, index) => {
    this.props.getUrl(files[0].url)
    this.setState({
      files,
    });
  };

  render() {
    const { files } = this.state;
    return (
      <ImagePicker
        className='imgpick'
        length="1"
        files={files}
        onChange={this.onChange}
        selectable={files.length < 1}
        onAddImageClick={this.onAddImageClick}
        disableDelete
      />
    );
  }
}
export default AddMealPic
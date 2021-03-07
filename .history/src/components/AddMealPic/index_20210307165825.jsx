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
    // Axios.post('http://localhost:5053/pic', qs.stringify(pic))
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
        onImageClick={(index, fs) => console.log(index, fs)}
        selectable={files.length < 1}
        onAddImageClick={this.onAddImageClick}
        disableDelete
      />
    );
  }
}
export default AddMealPic
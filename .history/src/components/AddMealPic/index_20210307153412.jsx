import React from 'react';
import { ImagePicker } from 'antd-mobile';
import { Axios } from '../../axios'
import qs from 'qs'
import './index.css'
const data = [];

class AddMealPic extends React.Component {
  state = {
    files: data,
  };
  onChange = (files, type, index) => {
    //  console.log("@@@", files, type, index);
    const pic = files[0]
    console.log("&&&", pic)
    Axios.post('http://localhost:5053/pic', qs.stringify(pic))
    this.setState({
      files,
    });
  };

  onTabChange = (key) => {
    console.log("pic!!!", key);
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
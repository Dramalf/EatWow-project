import React, { useState } from 'react';
import { Tag } from 'antd-mobile';
import { connect } from 'react-redux'
import { tags } from '../../redux/actions/tags'
import './index.css'
const ScriptsArea = () => {
    const [selectedTags, setselectedTags] = useState([]);
    function onChange(tag) {
        return (selected) => {
            console.log(selected, tag)
            if (selected) {
                setselectedTags([...setselectedTags, tag.name])
            }
            else {
                setselectedTags(selectedTags.filter((name) => name !== tag.name))
            }
        }
    }
    const sarr = [
        {
            id: 1,
            name: '清淡'
        },
        {
            id: 2,
            name: '东边'
        },
        {
            id: 3,
            name: '水果'
        },
        {
            id: 4,
            name: '西边'
        },
        {
            id: 5,
            name: '东边啊实'
        }
    ]
    const [scripts, setscripts] = useState(sarr)

    return (
        <div className='scriptsArea'>
            <div className="tag-container selectedBox">
                {
                    scripts.map((scriptObj) => {
                        return (
                            <Tag key={scriptObj.id} onChange={onChange(scriptObj)}>{scriptObj.name}</Tag>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default connect(
    state => state,
    { tags }
)(ScriptsArea)

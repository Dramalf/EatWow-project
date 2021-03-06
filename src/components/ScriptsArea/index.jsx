import React, { useState, useEffect } from 'react';
import { Tag } from 'antd-mobile';
import { connect } from 'react-redux'
import { tags } from '../../redux/actions/tags'
import './index.css'
const ScriptsArea = (props) => {
    const [selectedTags, setselectedTags] = useState([]);
    const [scripts, setscripts] = useState(['1', '2'])
    function onChange(tagname) {
        return (selected) => {
            if (selected) {
                setselectedTags([...selectedTags, tagname])
            }
            else {
                setselectedTags(selectedTags.filter((name) => name !== tagname))
            }
        }
    }
    useEffect(() => { setscripts(props.allTags) }, [props.allTags])
    useEffect(() => {
        props.tags(selectedTags)
    }, [selectedTags])

    return (
        <div className='scriptsArea'>
            <div className="tag-container selectedBox">
                {
                    scripts.map((script) => {
                        return (
                            <Tag key={script} onChange={onChange(script)}>{script}</Tag>
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

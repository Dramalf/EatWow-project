import React, { useState, useEffect } from 'react';
import { Tag } from 'antd-mobile';
import { connect } from 'react-redux'
import { Axios } from '../../axios'
import qs from 'qs'
import { tags } from '../../redux/actions/tags'
import './index.css'
const ScriptsArea = (props) => {
    const [selectedTags, setselectedTags] = useState([]);
    const [scripts, setscripts] = useState([])
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
    useEffect(() => {
        const ajaxData = { username: 'mlf', userid: '916', tags }
        Axios.post('http://localhost:5053/tags', qs.stringify(ajaxData))
            .then((alltags) => {
                console.log("s&&&", alltags)
                setscripts(alltags)
            })
    })
    useEffect(() => {
        props.tags(selectedTags)
    }, [selectedTags])
    // const sarr = [
    //     {
    //         id: 1,
    //         name: '清淡'
    //     },
    //     {
    //         id: 2,
    //         name: '东边'
    //     },
    //     {
    //         id: 3,
    //         name: '水果'
    //     },
    //     {
    //         id: 4,
    //         name: '西边'
    //     },
    //     {
    //         id: 5,
    //         name: '东边啊实'
    //     }
    // ]

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

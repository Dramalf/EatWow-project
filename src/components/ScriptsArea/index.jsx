import React, { useState } from 'react';
import { Tag } from 'antd-mobile';
import './index.css'
const ScriptsArea = () => {
    function onChange(selected) {
        console.log(`tag selected: ${selected}`);
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
    const [selectedScripts, setSelectedScripts] = useState(sarr)

    return (
        <div className='scriptsArea'>
            <div className="tag-container selectedBox">
                {
                    selectedScripts.map((scriptObj) => {
                        return (
                            <Tag key={scriptObj.id}>{scriptObj.name}</Tag>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ScriptsArea;

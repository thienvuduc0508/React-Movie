import React from 'react'
import PropTypes from 'prop-types'
import { useSwitchTab } from '../../hooks'
import './style.scss';

const SwitchTab = ({ data, onTabChange }) => {
    const { activeTab, selectedTab, left  } = useSwitchTab(onTabChange);
  return (
    <div className='tabs'>
        <div className="tabs__section">
            {(data || []).map((tab, index) => (
                    <span
                        key={index}
                        className={`tabs__item ${selectedTab === index ? 'active' : ''}`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
            ))}
            <span className='tabs__movingBg' style={{ left }}></span>
        </div>
    </div>
  )
}

SwitchTab.propTypes = {
    data: PropTypes.array,
    onTabChange: PropTypes.func
}

export default SwitchTab
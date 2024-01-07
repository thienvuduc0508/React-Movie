import { useState } from "react";

export const useSwitchTab = ( onTabChange ) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);
    
    const activeTab = (tab, index) => {
        setLeft(index*100);
        setTimeout(() => {
            setSelectedTab(index)
        }, 300)
        onTabChange(tab, index);
    }

    return {
        activeTab,
        selectedTab,
        left
    }
}
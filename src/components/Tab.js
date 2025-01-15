import { useState, useEffect } from "react";

function Tab({ children, activeTab, setActiveTab }) {
  const [active, setActive] = useState(setActiveTab);

  console.log(children);

  return (
    <div>
      <nav>
        {children.map((tab, index) => (
          <button
            onClick={() => setActiveTab(index)}
            className={
              activeTab === index ? "bg-green-200 btn" : "bg-gray-200 btn"
            }
            key={index}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      {children[activeTab]}
    </div>
  );
}

Tab.Panel = function ({ children }) {
  return <div>{children}</div>;
};

export default Tab;

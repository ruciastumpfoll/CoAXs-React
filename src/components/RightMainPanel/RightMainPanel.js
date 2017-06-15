import React from "react";
import s from "./RightMainPanel.css"
import TimeFilter from "./TimeFilter/TimeFilter"
import Scenario from "./Scenario/Scenario"
import ScenarioEditor from "./ScenarioEditor/ScenarioEditor"
import PlaceHolder from "./PlaceHolder/PlaceHolder"


class RightMainPanel extends React.Component {
  render() {
    return (
      <div className="rightMainPanel">
        {/*<PlaceHolder />*/}
        <ScenarioEditor/>
        <Scenario/>
        <TimeFilter/>

      </div>
    );
  }
}

export default RightMainPanel;

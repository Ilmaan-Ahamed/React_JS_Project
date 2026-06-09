import { useContext } from "react";
import Accordian from "../Accordian";
import LightDarkMode from "../LightDarkMode";
import RandomColor from "../RandomColor";
import TicTacToe from "../TicTactToe";
import TreeView from "../TreeView";
import { FeatureFlagsContext } from "./context";
import menus from "../TreeView/data";
import TabTest from "../CustomTabs/tabtest";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView  menus={menus} />,
    },
    {
        key : 'showTabs',
        component : <TabTest/>
    }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
import React from 'react';

import { useCallback, useRef, useState } from "react";
import { Divider, Input as AntdInput } from "antd";
import Scheduler from "material-ui-cron";
import Cron, { CronError } from "react-js-cron";
import "antd/dist/antd.css";
import MuiCron from "./Mui";
import { TextField, TextFieldProps } from "@mui/material";
import Button from './Button.jsx';
import DarkMode from './DarkMode';
import './DarkMode.css';
import './App.css'






function App() {
  const inputRef = useRef<TextFieldProps>(null);
  const defaultValue = "30 5 * * 1,6";
  const [value, setValue] = useState(defaultValue);
  const [textValue, setTextValue] = useState("");
  const customSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue);
      setTextValue(newValue);
    },
    [setTextValue]
  );

  const [error, onError] = useState<CronError>();
  const [cronExp, setCronExp] = useState("0 0 * * *");
  const [cronError, setCronError] = useState(""); // get error message if cron is invalid
  const [isAdmin, setIsAdmin] = useState(true); // set admin or non-admin to enable or disable high frequency scheduling (more than once a day)

  
  return (
    <div className="App">
      <header className="App-header" id="test">






        
      <h1 style={{color:'lightseagreen'}}>Coding Task: Cronjob Validator</h1>
      <p style={{fontSize:'24px'}}>Coding Assignment für <a target="_blank" href="https://www.mittwald.de/"><span style={{color:'lightseagreen'}}>Mittwald.de</span></a> Webhosting Company.</p>

<div id="test">
<p>nächste Ausführungszeit:</p>


      <Scheduler
        cron={cronExp}
        setCron={setCronExp}
        setCronError={setCronError}
        isAdmin={isAdmin}
      />
</div>
<DarkMode />
      </header>
    </div>
  );
}

export default App;

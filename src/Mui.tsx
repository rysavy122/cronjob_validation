import React from 'react'
import { useCallback, useRef, useState } from "react";
import { TextField, TextFieldProps } from "@mui/material";

import Cron, { CronError } from "react-js-cron-mui";

function MuiCron() {
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


  return (
    <div>

    <Cron value={value} setValue={customSetValue} onError={onError} />
  </div>
  );
}

export default MuiCron
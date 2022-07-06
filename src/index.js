import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const root = document.getElementById("root");
render(<App />, root);
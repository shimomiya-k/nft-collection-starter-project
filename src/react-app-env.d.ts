/// <reference types="react-scripts" />

import { Ethereumish } from "./types/ethereumish";

declare global {
  interface Window {
    ethereum: Ethereumish;
  }
}

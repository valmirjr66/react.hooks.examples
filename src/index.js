import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import CustomHookAndUseDebugExample from './CustomHookAndUseDebugExample';
import './index.css';
import MemoAndUseCallbackExample from './MemoAndUseCallbackExample';
import UseContextExample from './UseContextExample';
import UseDefferedValueExample from './UseDefferedValueExample';
import UseEffectPrevStateExample from './UseEffectPrevStateExample';
import UseIdExample from './UseIdExample';
import UseLayoutEffectExample from './UseLayoutEffectExample';
import UseMemoExample from './UseMemoExample';
import UseStateAndUseEffectExample from './UseStateAndUseEffectExample';
import UseStateLazyExample from './UseStateLazyExample';
import UseTransitionExample from './UseTransitionExample';
import UseRefExample from './UseRefExample';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/useId",
    element: <UseIdExample />
  },
  {
    path: "/useStateAndUseEffect",
    element: <UseStateAndUseEffectExample />
  },
  {
    path: "/useStateLazy",
    element: <UseStateLazyExample />
  },
  {
    path: "/useEffectPrevState",
    element: <UseEffectPrevStateExample />
  },
  {
    path: "/useMemo",
    element: <UseMemoExample />
  },
  {
    path: "/memoAndUseCallback",
    element: <MemoAndUseCallbackExample />
  },
  {
    path: "/useLayoutEffect",
    element: <UseLayoutEffectExample />
  },
  {
    path: "/useContext",
    element: <UseContextExample />
  },
  {
    path: "/customHookAndUseDebug",
    element: <CustomHookAndUseDebugExample />
  },
  {
    path: "/useDefferedValue",
    element: <UseDefferedValueExample />
  },
  {
    path: "/useTransition",
    element: <UseTransitionExample />
  },
  {
    path: "/useRef",
    element: <UseRefExample />
  }
]);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<RouterProvider router={router} />);

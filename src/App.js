import './App.css';

function App() {
  return (
    <div className="App">
      <ul style={{ textAlign: 'left' }}>
        {
          [
            { href: "useId", label: "useId" },
            { href: "useStateAndUseEffect", label: "useState and useEffect" },
            { href: "useStateLazy", label: "Lazy useState" },
            { href: "useEffectPrevState", label: "useEffect Previous Value" },
            { href: "useMemo", label: "useMemo" },
            { href: "memoAndUseCallback", label: "Memo and useCallback" },
            { href: "useLayoutEffect", label: "useLayoutEffect" },
            { href: "useContext", label: "useContext" },
            { href: "customHookAndUseDebug", label: "Custom Hook and useDebugValue" },
            { href: "useDefferedValue", label: "useDefferedValue" },
            { href: "useTransition", label: "useTransition" },
            { href: "useRef", label: "useRef" }
          ]
            .map((item, index) => (
              <li key={item.href} style={{ lineHeight: 2 }}>
                <a href={item.href}>{index + 1}. {item.label}</a>
              </li>
            ))
        }
      </ul>
    </div>
  );
}

export default App;

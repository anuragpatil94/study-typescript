import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
import { App } from "./components/app";

const store = createStore(reducers, applyMiddleware(thunk));

// // All the different props we pass to the component
// interface AppProps {
//   // Making color optional.
//   color?: string;
// }

// interface AppState {
//   counter: number;
// }

// // Functional Component
// // const App = (props: AppProps): JSX.Element => {
// //   return <div>{props.color}</div>;
// // };

// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };
//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

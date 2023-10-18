import { NativeBaseProvider } from "native-base";
import AuthForm from "./AuthForm";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <AuthForm />
      </NativeBaseProvider>
    );
  }
}

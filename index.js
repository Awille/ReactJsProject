import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules
} from 'react-native';


const { TestJavaModule } = NativeModules;

const { ToastExample } = NativeModules;

ToastExample.show('Awesome', ToastExample.SHORT);

// const App = () => {
//   // 创建一个 state 变量来保存从原生模块获取的文本
//   const [nativeText, setNativeText] = useState('');

//   useEffect(() => {
//     // 调用原生模块的方法
//     TestJavaModule.getNativeText()
//       .then((text) => {
//         // 成功时，使用返回的文本更新 state
//         setNativeText(text);
//       })
//       .catch((error) => {
//         // 错误处理
//         console.error(error);
//       });
//   }, []); // 空依赖数组意味着这个 effect 只会在组件首次渲染时运行

//   // 渲染从原生模块获取的文本
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>{nativeText || 'Loading...'}</Text>
//     </View>
//   );
// };

// export default App;

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => HelloWorld
);
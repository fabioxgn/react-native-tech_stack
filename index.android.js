import { AppRegistry, UIManager } from 'react-native';
import App from './src/app';

// Necessário para a animação funcionar no Android
UIManager.setLayoutAnimationEnabledExperimental(true);
AppRegistry.registerComponent('tech_stack', () => App);

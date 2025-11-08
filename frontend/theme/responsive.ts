import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

// width percentage
export const wp = (percent: number) => (width * percent) / 100;

// height percentage
export const hp = (percent: number) => (height * percent) / 100;

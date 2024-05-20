import {Dimensions} from 'react-native';
export function isNull({
  data,
}: {
  data: string | number | boolean | any | undefined;
}): boolean {
  try {
    if (
      data != null &&
      data != 'null' &&
      data != undefined &&
      data.toString().length != undefined &&
      data.toString().length != null &&
      data.toString().length > 0
    ) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const isValidEmail = ({text}: {text: string}): boolean => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (text.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};

export const isPortrait = ({
  height,
  width,
}: {
  height: number;
  width: number;
}): boolean => {
  let result = false;
  try {
    if (height >= width) {
      result = true;
    } else {
      result = false;
    }
  } catch (exc) {}
  return result;
};
 
 
 

import { useEffect } from "react";
// import {AppView} from '../App/AppView';
import { AppHomestack, AppRouter } from "../../Router";
import { useAppSelector } from "../../store/hooks";
import Loader from "../App/Loader";
import { useNavigation } from "@react-navigation/native";

export const ApplicationWrapper = () => {
  const VisibleLoader = useAppSelector((state) => state.Application.Loader);
  const UserLogin = useAppSelector((state) => state.Application.UserLogin);
  useEffect(() => {
    //
    /**
     * this type of global block help full for bind some event for using like event listener (checking internet connection,
     *  navigation flow and socket-io)
     *  */
  }, []);

  return (
    <>
      {UserLogin === false && <AppRouter />}
      {UserLogin === true && <AppHomestack />}

      {VisibleLoader && <Loader visible={VisibleLoader} />}
    </>
  );
};

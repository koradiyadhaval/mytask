import {useEffect} from 'react';
// import {AppView} from '../App/AppView';
import {AppRouter} from '../../Router';
import {useAppSelector} from '../../store/hooks';
import Loader from '../App/Loader';

export const ApplicationWrapper = () => {
  const VisibleLoader = useAppSelector(state => state.Home.Loader);
  useEffect(() => {
    //
    /**
     * this type of global block help full for bind some event for using like event listener (checking internet connection,
     *  navigation flow and socket-io)
     *  */
  }, []);

  return (
    <>
      <AppRouter />

      {VisibleLoader && <Loader visible={VisibleLoader} />}
    </>
  );
};

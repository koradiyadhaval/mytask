import React, {useCallback, useEffect} from 'react';
// import {View} from 'react-native';
import {AppView} from '../../Components/App/AppView';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  setData,
  setLoader,
  setLoadingMore,
  setMergeData,
  setNextDataFound,
  setPagenumber,
} from '../../store/slice/Home';
import {InterfaceHome} from '../../Interface/Response/Home/InterfaceHome';
import {FlatList} from 'react-native';
import {HomeCellView} from '../../Components/Custom/CellView/HomeCellview';
import {GetStyles} from './style';
import {FlatlistLoadmoreview} from '../../Components/Custom/FlatlistLoadmoreview';

const renderItemView = ({
  id,
  userId,
  title,
  body,
  index,
  OnCallBack,
}: {
  id?: number | string;
  userId: string | number;
  body?: string;
  title?: string;
  index: number;
  OnCallBack: ({eventName, Info}: {eventName: string; Info: any}) => void;
}): React.ReactElement => {
  return (
    <HomeCellView
      index={index}
      OnCallBack={OnCallBack}
      title={title}
      body={body}
      id={id}
      userId={userId}
    />
  );
};

export const Home = () => {
  const Styles = GetStyles();

  const dispatch = useAppDispatch();
  const Data = useAppSelector(state => state.Home.Data);
  const isLoadingMore = useAppSelector(state => state.Home.isLoadingMore);
  const isNextDataFound = useAppSelector(state => state.Home.isNextDataFound);

  const PageNumber = useAppSelector(state => state.Home.pagenumber);

  const InitialCallBack = useCallback(
    ({page}: {page: number}) => {
      const fetchData = async ({pagenumber}: {pagenumber: number}) => {
        try {
          if (pagenumber === 1) {
            dispatch(setLoader(true));
          } else if (pagenumber > 1) {
            dispatch(setLoadingMore(true));
          }

          const url =
            'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=' +
            pagenumber.toString();
          fetch(url)
            // .then(response => response.json())
            .then(async response => {
              const json = await response.json();
              if (response.status === 200 && json?.length > 0) {
                const result = json as InterfaceHome[];

                if (page === 1) {
                  dispatch(setPagenumber(1));
                  dispatch(setNextDataFound(true));
                  console.log(' response--', response);
                  console.log(' result--', result);
                  dispatch(setData(result));
                } else if (page > 1) {
                  console.log(' result--next', result);
                  // const newdata = [...Data, ...result];
                  dispatch(setMergeData(result));
                  dispatch(setLoadingMore(false));
                  dispatch(setNextDataFound(true));
                  dispatch(setPagenumber(pagenumber + 1));
                }
              } else {
                dispatch(setNextDataFound(false));
              }
              //
              dispatch(setLoader(false));
            })
            .catch(error => {
              //
              console.log(' response ', error);
              dispatch(setLoader(false));
            });
        } catch (exc) {
          //
          console.log(' crash ', exc);
          dispatch(setLoader(false));
        }
      };

      fetchData({pagenumber: page});
    },
    [dispatch],
  );

  useEffect(() => {
    InitialCallBack({page: 1});
  }, [InitialCallBack]);

  const OnrenderItemCellView = React.useCallback(
    ({
      id,
      userId,
      title,
      body,
      index,
      OnCallBack,
    }: {
      id?: number | string;
      userId: string | number;
      body?: string;
      title?: string;
      index: number;
      OnCallBack: ({eventName, Info}: {eventName: string; Info: any}) => void;
    }): React.ReactElement => {
      return renderItemView({
        id,
        userId,
        title,
        body,
        index,
        OnCallBack,
      });
    },
    [],
  );

  /**
   * Now OnCallBack method is used to pass the call back with data in your parent screen and pass the data with particular event name
   * for example i want pass multiple of operation result and need to use only call back for more than one senario so this type of structure in help full
   */
  const OnCallBack = ({eventName, Info}: {eventName: string; Info: any}) => {
    //
    console.log(' event  ', eventName);
    console.log(' Data  ', Info);
  };
  return (
    <AppView style={Styles.MainView}>
      <FlatList
        onEndReachedThreshold={0.7}
        // maxToRenderPerBatch={10}
        onEndReached={() => {
          //s
          if (isNextDataFound && isLoadingMore === false) {
            dispatch(setLoadingMore(true));
            console.log(' PageNumber ', PageNumber);
            InitialCallBack({page: PageNumber + 1});
          }
        }}
        contentContainerStyle={Styles.FlatListStyle}
        data={Data}
        ListFooterComponent={
          isNextDataFound === true && isLoadingMore === true ? (
            <FlatlistLoadmoreview />
          ) : null
        }
        renderItem={({item, index}) => {
          return (
            <OnrenderItemCellView
              OnCallBack={OnCallBack}
              id={item?.id}
              index={index}
              userId={item?.userId}
              title={item?.title}
              body={item?.body}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </AppView>
  );
};

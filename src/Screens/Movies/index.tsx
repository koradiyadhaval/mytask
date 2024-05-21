import React, { useCallback, useEffect } from "react";
import { AppView } from "../../Components/App/AppView";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  InterfaceMovie,
  InterfaceMovieItem,
} from "../../Interface/Response/InterfaceMovie";
import { FlatList } from "react-native";
import { MoviesCellview } from "../../Components/Custom/CellView/MoviesCellview";
import { GetStyles } from "./style";
import { setLoader } from "../../store/slice/Application";
import { setData } from "../../store/slice/Movie";

const renderItemView = ({
  index,
  item,
}: {
  index: number;
  item?: InterfaceMovieItem;
}): React.ReactElement => {
  return <MoviesCellview index={index} item={item} />;
};

export const Movies = () => {
  const Styles = GetStyles();

  const dispatch = useAppDispatch();
  const Data = useAppSelector((state) => state.Movie.Data);

  const InitialCallBack = useCallback(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoader(true));

        const url = "https://dummyapi.online/api/movies";
        fetch(url)
          // .then(response => response.json())
          .then(async (response) => {
            const json = await response.json();
            if (response.status === 200 && json?.length > 0) {
              const result = json as InterfaceMovie;
              dispatch(setData(result));
            }
            //
            dispatch(setLoader(false));
          })
          .catch((error) => {
            //
            console.log(" response ", error);
            dispatch(setLoader(false));
          });
      } catch (exc) {
        //
        console.log(" crash ", exc);
        dispatch(setLoader(false));
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    InitialCallBack();
  }, [InitialCallBack]);

  const OnrenderItemCellView = React.useCallback(
    ({
      item,
      index,
    }: {
      index: number;
      item?: InterfaceMovieItem;
    }): React.ReactElement => {
      return renderItemView({
        index,
        item,
      });
    },
    []
  );

  return (
    <AppView style={Styles.MainView}>
      <FlatList
        // onEndReached={() => {
        //   //s
        //   if (isNextDataFound && isLoadingMore === false) {
        //     dispatch(setLoadingMore(true));
        //     console.log(" PageNumber ", PageNumber);
        //     InitialCallBack({ page: PageNumber + 1 });
        //   }
        // }}
        // contentContainerStyle={Styles.FlatListStyle}
        data={Data}
        // ListFooterComponent={
        //   isNextDataFound === true && isLoadingMore === true ? (
        //     <FlatlistLoadmoreview />
        //   ) : null
        // }
        renderItem={({ item, index }) => {
          return <OnrenderItemCellView index={index} item={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </AppView>
  );
};

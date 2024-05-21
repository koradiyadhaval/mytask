import React, { useState, useEffect } from "react";
import { AppCardView } from "../../../App/AppCardView";
import { AppView } from "../../../App/AppView";
import { TextView } from "../../../App/TextView";
import { GetStyle } from "./style";
import json from "../../../../Util/Language/Eng/index.json";
import { InterfaceMovieItem } from "../../../../Interface/Response/InterfaceMovie";
import FastImage from "react-native-fast-image";
import { isNull } from "../../../../Util";
import { Rating, AirbnbRating } from "react-native-ratings";

interface HomeParams {
  index: number;
  item?: InterfaceMovieItem;
}

function propsAreEqual(prev: HomeParams, next: HomeParams) {
  const result = prev?.item === next?.item;
  return result;
}

export const MoviesCellview = React.memo(({ index, item }: HomeParams) => {
  const styles = GetStyle();

  /**
   * Now OnCallBack method is used to pass the call back with data in your parent screen and pass the data with particular event name
   * for example i want pass multiple of operation result and need to use only call back for more than one senario so this type of structure in help full
   */

  const PrintCellView = ({
    texttitle,
    value,
  }: {
    texttitle?: string;
    value?: string;
  }) => {
    return (
      <AppView style={styles.AppCellviewStyle}>
        <TextView style={styles.keyNameSTyle}>{texttitle || ""}</TextView>
        <TextView style={styles.keyValuestyle}>{value || ""}</TextView>
      </AppView>
    );
  };

  const PrintRatingCellView = ({
    texttitle,
    value,
  }: {
    texttitle?: string;
    value?: string;
  }) => {
    return (
      <AppView style={styles.AppCellviewStyle}>
        {/* <TextView style={styles.keyNameSTyle}>{texttitle || ""}</TextView> */}

        <AppView style={styles.RatingParentview}>
          <Rating
            showRating={false}
            imageSize={20}
            ratingCount={10}
            startingValue={item?.rating || 0}
            ratingColor="blue"
            // onFinishRating={this.ratingCompleted}
            minValue={0.5}
            style={{ maxHeight: 30, height: 30 }}
          />
        </AppView>
      </AppView>
    );
  };

  const [ImgLoadingfail, setImgLoadingfail] = React.useState<boolean | null>(
    null
  );

  return (
    <AppCardView key={index.toString()} style={styles.cardViewStyle}>
      <AppView style={styles.InnerCardmainView}>
        <AppView style={styles.InnerImageview}>
          {isNull({ data: item?.imdb_url }) === true &&
            ImgLoadingfail === null && (
              <FastImage
                onLoadEnd={() => {}}
                fallback={true}
                onError={() => {
                  setImgLoadingfail(true);
                }}
                style={{ width: 50, height: 50 }}
                source={{
                  uri: item?.image,

                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}

          {ImgLoadingfail === true && <TextView>Image Loading Fail</TextView>}
        </AppView>

        <AppView style={styles.InnerDetailsview}>
          <PrintCellView
            texttitle={json.label_movie_name}
            value={item?.movie}
          ></PrintCellView>

          <PrintRatingCellView
            texttitle={json.label_movie_rating}
            value={item?.movie}
          ></PrintRatingCellView>
        </AppView>
      </AppView>
    </AppCardView>
  );
}, propsAreEqual);

import React, {useState, useEffect} from 'react';
import {AppCardView} from '../../../App/AppCardView';
import {AppView} from '../../../App/AppView';
import {TextView} from '../../../App/TextView';
import {GetStyle} from './style';
import json from '../../../../Util/Language/Eng/index.json';

interface HomeParams {
  id?: number | string;
  userId?: number | string;
  title?: string;
  body?: string;
  index: number;
  OnCallBack?: ({eventName, Info}: {eventName: string; Info: any}) => void;
}

function propsAreEqual(prev: HomeParams, next: HomeParams) {
  const result = prev?.id === next?.id && next?.userId === prev?.userId;
  return result;
}

export const HomeCellView = React.memo(
  ({id, userId, title, body, index, OnCallBack}: HomeParams) => {
    const styles = GetStyle();

    /**
     * Now OnCallBack method is used to pass the call back with data in your parent screen and pass the data with particular event name
     * for example i want pass multiple of operation result and need to use only call back for more than one senario so this type of structure in help full
     */

    const [Id, setId] = useState<string | number>();
    const [UserId, setUserId] = useState<string | number>('');
    const [Title, setTitle] = useState('');
    const [Body, setBody] = useState('');

    useEffect(() => {
      setId(id || '');
      setUserId(userId || '');
      setTitle(title || '');
      setBody(body || '');
      return () => {};
    }, [body, id, title, userId]);

    // eslint-disable-next-line react/no-unstable-nested-components
    const PrintCellView = ({
      texttitle,
      value,
    }: {
      texttitle?: string;
      value?: string;
    }) => {
      return (
        <AppView style={styles.AppCellviewStyle}>
          <TextView style={styles.keyNameSTyle}>{texttitle || ''}</TextView>
          <TextView style={styles.keyValuestyle}>{value || ''}</TextView>
        </AppView>
      );
    };

    return (
      <AppCardView key={index.toString()} style={styles.cardViewStyle}>
        <AppView style={styles.InnerCardmainView}>
          {Id !== null && Id !== undefined && (
            <PrintCellView texttitle={json.ID} value={Id?.toString() || ''} />
          )}

          {UserId !== null && UserId !== undefined && (
            <PrintCellView
              texttitle={json.UserId}
              value={UserId?.toString() || ''}
            />
          )}

          {Title !== null && Title !== undefined && (
            <PrintCellView texttitle={json.Title} value={Title || ''} />
          )}

          {Body !== null && Body !== undefined && (
            <PrintCellView texttitle={json.Body} value={Body || ''} />
          )}
        </AppView>
      </AppCardView>
    );
  },
  propsAreEqual,
);

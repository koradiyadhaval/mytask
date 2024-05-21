import React, { useCallback, useEffect, useRef } from "react";
// import {View} from 'react-native';
import { AppView } from "../../Components/App/AppView";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { serUserEmail, serUserLogin } from "../../store/slice/Application";
import json from "../../Util/Language/Eng/index.json";
import { FlatList, Keyboard } from "react-native";
import { HomeCellView } from "../../Components/Custom/CellView/MoviesCellview";
import { GetStyles } from "./style";
import { FlatlistLoadmoreview } from "../../Components/Custom/FlatlistLoadmoreview";
import { AppSafeAreaView } from "../../Components/App/AppSafeAreaView";
import { AppScrollView } from "../../Components/App/AppScrollView";
import { AppExtraEditText } from "../../Components/App/AppExtraEditText";
import { AppCardView } from "../../Components/App/AppCardView";
import { EditText } from "../../Components/App/EditText";
import { Formik } from "formik";
import * as yup from "yup";
import { TextView } from "../../Components/App/TextView";
import { AppTochableOpacity } from "../../Components/App/AppTochableOpacity";

export const Login = () => {
  const Styles = GetStyles();

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email(json.label_validation_email_valid)
      .required(json.label_validation_email_require),
    password: yup
      .string()
      .min(8, json.label_validation_password_field_min_length_message)
      .required(json.label_validation_password_require),
  });

  const RefEmail = useRef();
  const RefPassword = useRef();
  const dispatch = useAppDispatch();

  const OnSuccessLogin = ({ Email }: { Email: string }) => {
    dispatch(serUserEmail(Email));
    dispatch(serUserLogin(true));
  };

  return (
    <AppSafeAreaView style={Styles.MainSafeAreaview}>
      <AppScrollView contentContainerStyle={Styles.AppScrollView}>
        <AppView style={Styles.MainView}>
          <TextView style={Styles.screen_title}>
            {json.label_login_title}
          </TextView>
          <AppCardView style={Styles.AppCardViewstyle}>
            <AppView style={Styles.InnerAppView}>
              <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                  console.log(values);

                  OnSuccessLogin({ Email: values.email });
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  isValid,
                }) => (
                  <AppView>
                    <EditText
                      id="email"
                      ref={RefEmail}
                      placeholder="Email"
                      style={Styles.LoginTextInputStyle}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                      onSubmitEditing={() => {
                        RefPassword?.current?.focus();
                      }}
                    />
                    {errors.email && (
                      <TextView style={Styles.ErrorView}>
                        {errors.email}
                      </TextView>
                    )}
                    <EditText
                      id="password"
                      placeholder="Password"
                      style={Styles.LoginTextInputStyle}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry={true}
                      ref={RefPassword}
                      onSubmitEditing={() => {
                        Keyboard.dismiss();
                        handleSubmit();
                      }}
                    />
                    {errors.password && (
                      <TextView style={Styles.ErrorView}>
                        {errors.password}
                      </TextView>
                    )}

                    <AppTochableOpacity
                      onPress={() => handleSubmit()}
                      style={Styles.appTouchableView}
                    >
                      <TextView style={Styles.textButton}>Login</TextView>
                    </AppTochableOpacity>
                  </AppView>
                )}
              </Formik>
            </AppView>
          </AppCardView>
        </AppView>
      </AppScrollView>
    </AppSafeAreaView>
  );
};

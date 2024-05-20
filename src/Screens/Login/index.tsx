import React, { useCallback, useEffect, useRef } from "react";
// import {View} from 'react-native';
import { AppView } from "../../Components/App/AppView";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {} from "../../store/slice/Application";
import { InterfaceHome } from "../../Interface/Response/Home/InterfaceHome";
import { FlatList, Keyboard } from "react-native";
import { HomeCellView } from "../../Components/Custom/CellView/HomeCellview";
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

export const Login = () => {
  const Styles = GetStyles();

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });

  const RefEmail = useRef();
  const RefPassword = useRef();
  const formikrefs = useRef("forma");

  return (
    <AppSafeAreaView style={Styles.MainSafeAreaview}>
      <AppScrollView contentContainerStyle={Styles.AppScrollView}>
        <AppView style={Styles.MainView}>
          <AppCardView style={Styles.AppCardViewstyle}>
            <AppView style={Styles.InnerAppView}>
              {/* <EditText
                placeholder="useless placeholder"
                placeholderTextColor={"color_black"}
                style={Styles.LoginTextInputStyle}
              ></EditText> */}

              <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
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
                      }}
                    />
                    {errors.password && (
                      <TextView style={Styles.ErrorView}>
                        {errors.password}
                      </TextView>
                    )}
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

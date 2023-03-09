import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { instance } from "../service/axios"
import { getData } from "../service/getData"

export const AxiosErrorHandleProvider = ({ children }) => {
    const navigate = useNavigate() // Hooksが使用できる！！
    const data = getData();

    useEffect(() => {
      // axiosの共通エラーハンドリング記述
      instance.interceptors.request.use(
        (request) => {console.log('request')
                      console.log(data);
                    }
        ,
        (error) => {
          switch (error.request?.status) {
            case 404:
              console.log("404");
              navigate('/error'); // navigateを使用してリダイレクト
              return Promise.reject(error.request?.data);
          }
        }
      );
    }, [data]);

    useEffect(() => {
      // axiosの共通エラーハンドリング記述
      instance.interceptors.response.use(
        (response) => {console.log('response')
          console.log(data);},
        (error) => {
          switch (error.response?.status) {
            case 404:
              console.log("404");
              navigate('/error'); // navigateを使用してリダイレクト
              return Promise.reject(error.response?.data);
          }
        }
      );
    }, [data]);

    return <>{children}</>;
  }
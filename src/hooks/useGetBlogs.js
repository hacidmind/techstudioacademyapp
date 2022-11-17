import {useEffect} from "react";
import axios from "axios";

import useAppProvider from "./useAppProvider";

const useGetBlogs = () => {
    const { blogs, setBlogs } = useAppProvider();

    useEffect(() => {
        let controller = new AbortController();
        const getBlog = async () => {
            try {
            const res =  await axios.get('http://localhost:8000/myblog');
            setBlogs(res.data);
            } catch (error) {
              console.log(error);
            }
          }
          getBlog();
          return () => controller?.abort();
    }, [setBlogs]);

    return blogs;
}

export default useGetBlogs;
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getUserAddressInfo } from "../../../../apis/api/addressApis";

export default function useMainContent(){
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(10);
    const [startPage, setStartPage] = useState(1);
    const [activePage, setActivePage] = useState(1);
    const pageSize: number = 17;

    useQuery(['getAddressList', currentPage, pageSize], () => {
        // getUserAddressInfo(currentPage - 1, pageSize).then
    })
}
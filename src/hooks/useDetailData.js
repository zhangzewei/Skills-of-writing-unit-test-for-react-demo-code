import { useEffect, useState } from "react";

export default function useDetailData(
    getDataRequest,
    dependencies
) {
    const [detail, setDetail] = useState(null);
    useEffect(() => {
        const shouldGetDetail = dependencies.find(d => !!d);
        if (!!shouldGetDetail) {
            getDataRequest(...dependencies)?.then(res => {
                res.data && setDetail(res.data);
            });
        } else {
            setDetail(null);
        }
    }, dependencies);

    return detail;
}
'use client'

import Input from "./Input";
import SaleDetail from "./sale-detail/SaleDetail";
import { useEffect } from "react";
import { useStoreSale, useStoreDetails } from "../store/sale";

function SaleDetails() {

    const { details, updateDetails, removeDetail, addDetail } = useStoreDetails();
    const {total, setTotal} = useStoreSale();

    useEffect(() => {
        const detailsTotal = details.reduce((acumulador, object) => acumulador + object.subtotal, 0);
        setTotal(detailsTotal);
    }, [details]);

    return ( 
        <>
            <div id="saleDetails">
                {
                    details?.map((detail, key)=>
                        <SaleDetail key={key} setDetail={updateDetails} remove={removeDetail} detailContent={detail} detailId={detail.id} />
                    )
                }
                <button onClick={() => addDetail()} className="h-12 px-8 bg-blue text-white text-lg mt-6 hover:bg-blue-hover">Add</button>
                <div className="flex items-center gap-3 justify-end w-full">
                    <span>Total</span>
                    <Input inputWith='w-50' inputType='number' setValue={setTotal} value={total} isReadOnly={false} />
                </div>
            </div>
        </>
     );
}

export default SaleDetails;
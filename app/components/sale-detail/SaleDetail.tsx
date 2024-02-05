'use client'

import Input from "../Input";
import Autocomplete from "../Autocomplete";
import { useEffect, useState } from "react";
import { DetailContentProps, ProductosProps } from "@/app/interfaces/interfaces";

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://zswzcvtupiryfjzsnbxp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzd3pjdnR1cGlyeWZqenNuYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MTgzNzcsImV4cCI6MjAyMjM5NDM3N30.rNz6TMKFAEdd0evLIHbUJT2rG6DK0h6Ag9HeAjjTFwA')

async function getProductos() {
    return await supabase
        .from('producto')
        .select('*')
}


function SaleDetail(prop:{detailId:string, detailContent:DetailContentProps, remove: (detailId: string)=>void, setDetail: (detail: DetailContentProps) => void}) {

    const [productosList, setProductosList] = useState<ProductosProps[]>([]);

    const setName = (value: string) => {
        let newDetailContent = {...prop.detailContent};
        const findObject = productosList.find(object => object.name === value);
        if(findObject) {
            newDetailContent.name = findObject.id;
        }
        else {
            newDetailContent.name = 0;
        }
        prop.setDetail(newDetailContent);
    }

    const setQuantity = (value: number) => {
        let newDetailContent = {...prop.detailContent};
        newDetailContent.quantity = value;
        prop.setDetail(newDetailContent);
    }

    const setPrice = (value: number) => {
        let newDetailContent = {...prop.detailContent};
        newDetailContent.price = value;
        prop.setDetail(newDetailContent);
    }

    const setSubtotal = (value: number) => {
        let newDetailContent = {...prop.detailContent};
        newDetailContent.subtotal = value;
        prop.setDetail(newDetailContent);
    }
    // Fin del Custom Hook

    const nombres = productosList.reduce((accumulator:any, current) => {
        return [...accumulator, current.name];
    }, []);

    useEffect(() => {
        const getDataSucursal = async () => {
            try {
                // Realizar una consulta a la tabla
                const { data, error } = await getProductos()
                if (error) throw error;

                // Actualizar el estado con los datos obtenidos
                setProductosList(data);
              } catch (error) {
                console.error('Error al obtener datos de Supabase:', error);
              }
        }
        getDataSucursal();
    }, []);

    useEffect(() => {
        const elementoEncontrado = productosList.find(item => item.id === prop.detailContent.name);
        
        elementoEncontrado ? setPrice(elementoEncontrado.precio) : setPrice(0);
    }, [prop.detailContent.name]);

    useEffect(() => {
        const subtotal = prop.detailContent.quantity * prop.detailContent.price;
        setSubtotal(subtotal);
    }, [prop.detailContent.quantity, prop.detailContent.price]);

    return ( 
        <>
            <article id={prop.detailId} className="flex gap-10 mt-3">
                <Autocomplete opciones={nombres} setOpcion={setName} />
            
                <Input inputWith='w-1/4' inputType='number' setValue={setQuantity} value={prop.detailContent.quantity} isReadOnly={false} />
            
                <Input inputWith='w-1/4' inputType='number' setValue={setPrice} value={prop.detailContent.price} isReadOnly={true} />
            
                <Input inputWith='w-1/4' inputType='number' setValue={setSubtotal} value={prop.detailContent.subtotal} isReadOnly={true} />

                <button onClick={()=>prop.remove(prop.detailId)} className="h-12 px-4 bg-blue text-white text-2xl hover:bg-blue-hover">x</button>
            </article>
        </>
     );
}

export default SaleDetail;
'use client'

import { useEffect } from "react";
import { useStoreInfoGeneral, useStoreSale } from "../store/sale";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://zswzcvtupiryfjzsnbxp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzd3pjdnR1cGlyeWZqenNuYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MTgzNzcsImV4cCI6MjAyMjM5NDM3N30.rNz6TMKFAEdd0evLIHbUJT2rG6DK0h6Ag9HeAjjTFwA')

async function getVendedor(brachOffice: number) {
    return await supabase
        .from('detalle_vendedor')
        .select('rut_persona')
        .eq('id_sucursal', brachOffice)
}

async function insertSale(sale: any) {
    const { data, error } = await supabase
    .from('venta')
    .insert([
    { fecha: sale.fecha, total: sale.total, rut_cliente: sale.rut_cliente, id_sucursal: sale.id_sucursal, rut_vendedor: sale.rut_vendedor },
    ])
    .select()
}



function SaveSale() {
    const { infoGeneral } = useStoreInfoGeneral();
    const { total } = useStoreSale();

    const getDataVendedor = async (brachOffice: number) => {
        try {
            const { data, error } = await getVendedor(brachOffice)
            if (error) throw error;

            return (data[0].rut_persona);
            
            } catch (error) {
            console.error('Error al obtener datos de Supabase:', error);
        }
    }

    const SendData = async () => {
        if (infoGeneral.brachOffice != 0) {
            const fechaHoy = new Date()
            const fechaCompleta = `${fechaHoy.getFullYear()}-${(fechaHoy.getMonth() + 1 < 10 && 0)}${fechaHoy.getMonth() + 1}-${(fechaHoy.getDate() + 1 < 10 && 0)}${fechaHoy.getDate()}`
            const vendedor = await getDataVendedor(infoGeneral.brachOffice);

            const sale = {fecha: fechaCompleta, total: total, rut_cliente: infoGeneral.cliente, id_sucursal: infoGeneral.brachOffice, rut_vendedor: vendedor};
            insertSale(sale);
        }
    }

    return ( 
        <>  
            <div className="flex justify-end w-full">
                <button onClick={() => SendData()} className="h-12 px-8 bg-blue text-white text-lg mt-6 hover:bg-blue-hover">Save</button>
            </div>
        </>
     );
}

export default SaveSale;
'use client'

import Input from "./Input";
import Autocomplete from "./Autocomplete";
import { useEffect } from "react";
import { useStoreInfoGeneral } from "../store/sale";

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://zswzcvtupiryfjzsnbxp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzd3pjdnR1cGlyeWZqenNuYnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MTgzNzcsImV4cCI6MjAyMjM5NDM3N30.rNz6TMKFAEdd0evLIHbUJT2rG6DK0h6Ag9HeAjjTFwA')

async function getSucursal() {
    return await supabase
        .from('sucursal')
        .select('*')
}

async function getClientes() {
    return await supabase
        .from('persona')
        .select('*')
        .eq('rol', 1)
}


function InfoGeneral() {

    const { infoGeneral, sucursalesList, clientesList, setSucursalesList, setClientesList, updateClient, updateBranchOffice, updateCurrency } = useStoreInfoGeneral();

    useEffect(() => {
        const getDataSucursal = async () => {
            try {
                // Realizar una consulta a la tabla
                const { data, error } = await getSucursal()
                if (error) throw error;

                // Actualizar el estado con los datos obtenidos
                setSucursalesList(data);
              } catch (error) {
                console.error('Error al obtener datos de Supabase:', error);
              }
        }
        getDataSucursal();

        const getDataClientes = async () => {
            try {
                // Realizar una consulta a la tabla
                const { data, error } = await getClientes()
                if (error) throw error;

                // Actualizar el estado con los datos obtenidos
                setClientesList(data);
              } catch (error) {
                console.error('Error al obtener datos de Supabase:', error);
              }
        }
        getDataClientes();
    }, []);

    const sucursalesNames = sucursalesList.reduce((accumulator:any, current) => {
        return [...accumulator, current.name];
    }, []);

    const clientesNames = clientesList.reduce((accumulator:any, current) => {
        return [...accumulator, current.name];
    }, []);
    
    useEffect(() => {
        const elementoEncontrado = sucursalesList.find(item => item.id === infoGeneral.brachOffice);
        
        elementoEncontrado != undefined ? updateCurrency(elementoEncontrado.currency) : updateCurrency('');
    }, [infoGeneral.brachOffice]);


    return ( 
        <>
            <section className="mx-auto xl:max-w-7xl mt-14">
                <h1 className="text-3xl font-['FontBold']">Document</h1>
                <article className="flex gap-12 mt-3">
                    <div className="flex flex-col w-full">
                        <span className="">Client</span>
                        <div className="flex gap-4">
                            <Autocomplete opciones={clientesNames} setOpcion={updateClient} />
                            <button className="h-12 w-12 bg-blue text-white text-2xl hover:bg-blue-hover">+</button>
                        </div>
                    </div>
                    <div className="flex flex-col w-3/4">
                        <span>Branch Office</span>
                        <Autocomplete opciones={sucursalesNames} setOpcion={updateBranchOffice} />
                    </div>
                    <div className="flex flex-col w-34">
                        <span>Currency</span>
                        <Input value={infoGeneral.currency} setValue={updateCurrency} inputWith='w-full' inputType='text' isReadOnly={true} />
                    </div>
                </article>
            </section>
        </>
     );
}

export default InfoGeneral;
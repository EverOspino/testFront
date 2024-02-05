export interface SucursalProps {
    id: number;
    name: string;
    currency: string;
}

export interface ClientesProps {
    id: number;
    name: string;
    direccion: string;
    telefono: string;
    rol: number;
} 

export interface DetailContentProps {
    id: string, 
    name: number, 
    quantity: number, 
    price: number, 
    subtotal: number
}

export interface ProductosProps {
    id: number;
    name: string;
    precio: number;
    stock: number;
    id_sucursal: number;
}

export interface AutocompletadoProps {
    opciones: string[],
    setOpcion: (value: string) => void
}

export interface InfoGeneralProps {
    cliente: number, 
    brachOffice: number, 
    currency: string
}

export interface StoreTotal {
    total: number;
    setTotal: (value: number) => void;
}
  
export interface StoreTotalDetails {
    details: DetailContentProps[];
    updateDetails: (detail: DetailContentProps) => void;
    removeDetail: (id: string) => void;
    addDetail: () => void;
}
  
export interface StoreInfoGeneral {
    infoGeneral: InfoGeneralProps;
    sucursalesList: SucursalProps[];
    clientesList: ClientesProps[];
    updateClient: (value: string) => void;
    updateBranchOffice: (value: string) => void;
    updateCurrency: (value: string) => void;
    setSucursalesList: (value: SucursalProps[]) => void;
    setClientesList: (value: ClientesProps[]) => void;
}
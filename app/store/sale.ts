import { create } from 'zustand'
import { ClientesProps, DetailContentProps, InfoGeneralProps, StoreInfoGeneral, StoreTotal, StoreTotalDetails, SucursalProps } from '../interfaces/interfaces';


const updateDetails = (details: DetailContentProps[], detail: DetailContentProps) => {
  const newData = [...details];
  const index = newData.findIndex(object => object.id === detail.id);

  if (index !== -1) {
    newData[index] =detail;
  }
  return newData;
}

const updateClient = (infoGeneral: InfoGeneralProps, clientesList: ClientesProps[], client: string) => {
  let newInfoGeneral = {...infoGeneral};
  const findObject = clientesList.find(object => object.name === client);
  if(findObject) {
      newInfoGeneral.cliente = findObject.id;
  }
  else {
    newInfoGeneral.cliente = 0;
  }
  return newInfoGeneral;
}

const updateBranchOffice = (infoGeneral: InfoGeneralProps, sucursalesList: SucursalProps[], branchOffice: string) => {
  let newInfoGeneral = {...infoGeneral};
  const findObject = sucursalesList.find(object => object.name === branchOffice);
  if(findObject) {
      newInfoGeneral.brachOffice = findObject.id;
  }
  else {
    newInfoGeneral.brachOffice = 0;
  }
  return newInfoGeneral;
}

const updateCurrency = (infoGeneral: InfoGeneralProps, currency: string) => {
  let newInfoGeneral = {...infoGeneral};
  newInfoGeneral.currency = currency;
  return newInfoGeneral;
}


export const useStoreSale = create<StoreTotal>()((set) => ({
  total: 0,
  setTotal: (value: number) => set(() => ({ total: value })),
}))


export const useStoreDetails = create<StoreTotalDetails>()((set) => ({
  details: [{id:'detail-1', name:0, quantity:0, price:0, subtotal:0}],

  updateDetails: (detail: DetailContentProps) => set((state) => ({ details: updateDetails(state.details, detail) })),

  removeDetail: (id: string) => set((state) => ({ details: state.details.filter(object => object.id !== id) })),

  addDetail: () => set((state) => ({ details: state.details.concat([{id:'detail-' + state.details.length + 1, name:0, quantity:0, price:0, subtotal:0}])
  })),
}))


export const useStoreInfoGeneral = create<StoreInfoGeneral>()((set) => ({
  infoGeneral: {cliente:0, brachOffice:0, currency:''},
  sucursalesList: [],
  clientesList: [],

  updateClient: (value: string) => set((state) => ({ infoGeneral: updateClient(state.infoGeneral, state.clientesList, value) })),

  updateBranchOffice: (value: string) => set((state) => ({ infoGeneral: updateBranchOffice(state.infoGeneral, state.sucursalesList, value) })),

  updateCurrency: (value: string) => set((state) => ({ infoGeneral: updateCurrency(state.infoGeneral, value) })),

  setSucursalesList: (value: SucursalProps[]) => set(() => ({ sucursalesList: value })),

  setClientesList: (value: ClientesProps[]) => set(() => ({ clientesList: value })),
}))

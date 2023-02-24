export interface ParcelState {
    parcels: Parcel[];
  }
  
  export interface Parcel {
    name: string;
    email: string;
    destination: string;
  }
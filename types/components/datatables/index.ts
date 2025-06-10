interface Datatables {
  name: string;
  post: string;
  project: string;
  status: string;
  budget: string;
}

interface SelectedRowDatatable {
  name: string;
  post: string;
  project: string;
  status: string;
  budget: string;
  selectable: boolean;
}

interface filtrable {
  name: string;
  image: string;
  price: number;
  rating: number;
  stock: boolean;
}

export type { Datatables, SelectedRowDatatable, filtrable };

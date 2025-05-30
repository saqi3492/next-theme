export const HEADER_HEIGHT: number = 60;
export const SIDEBAR_WIDTH: number = 230;
export const COLLAPSED_SIDEBAR_WIDTH: number = 75;
export const SIDEBAR_TOP_HEADER_AREA: number = 70;

export interface ColDef {
  headerName: string;
  colId: string;
  field: string;
  cellRenderer?: string;
  flex?: number;
  minWidth?: number;
  filter?: boolean;
  // cellStyle?: { textAlign: string };
}

export const defaultColDef: Partial<ColDef> = {
  filter: false,
  flex: 1,
  minWidth: 120,
  // cellStyle: { textAlign: 'center' },
};

export const sessionsColDefs: ColDef[] = [
  {
    headerName: 'Patient Name',
    colId: 'patientName',
    field: 'patientName',
  },
  {
    headerName: 'Date & Time',
    colId: 'createdAt',
    field: 'createdAt',
  },
  {
    headerName: 'Duration',
    colId: 'duration',
    field: 'duration',
  },
  {
    headerName: 'Action',
    colId: 'action',
    field: 'sessionId',
    cellRenderer: 'ActionRenderer',
  },
];

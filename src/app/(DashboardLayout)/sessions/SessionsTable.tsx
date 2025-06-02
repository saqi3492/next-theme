import { AgGridReact } from 'ag-grid-react';
import { defaultColDef, sessionsColDefs } from '@/utils/constants';
import ActionRenderer from './ActionRenderer';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

const renderers = { ActionRenderer };
interface SessionsTableProps {
  rowData: any[] | null;
}

const SessionsTable: React.FC<SessionsTableProps> = ({ rowData }) => {
  return (
    <div style={{ flex: 1 }}>
      <AgGridReact
        loading={rowData === null}
        rowData={rowData}
        columnDefs={sessionsColDefs}
        defaultColDef={defaultColDef}
        components={renderers}
      />
    </div>
  );
};

export default SessionsTable;

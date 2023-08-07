import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Stores } from '../../types/stores';
import { requestBackend } from '../../util/request';
import './styles.css';

export type StoresFilterData = {
  name: string;
};

const Filter = () => {
  const [selectStores, setSelectStores] = useState<Stores[]>([]);

  useEffect(() => {
    requestBackend({ url: '/stores' }).then((response) => {
      setSelectStores(response.data);
    });
  }, []);

  return (
    <div className="filter-container base-card">
      <div className="stores-filter-container">
        <Select
          options={selectStores}
          classNamePrefix="stores-filter-select"
          placeholder="Loja"
          isClearable
          getOptionLabel={(stores: Stores) => stores.name}
          getOptionValue={(stores: Stores) => String(stores.id)}
        />
      </div>
    </div>
  );
};

export default Filter;

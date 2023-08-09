import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FilterData } from '../../types/filter';
import { Store } from '../../types/stores';
import { requestBackend } from '../../util/request';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

const Filter = ({ onFilterChange }: Props) => {
  const [selectStores, setSelectStores] = useState<Store[]>([]);

  const [store, SetStore] = useState<Store>();

  useEffect(() => {
    requestBackend({ url: '/stores' }).then((response) => {
      setSelectStores(response.data);
    });
  }, []);

  const onChangeStore = (value: Store) => {
    SetStore(value);

    onFilterChange({
      storeId: value.id,
    });
  };

  return (
    <div className="filter-container base-card">
      <div className="stores-filter-container">
        <Select
          options={selectStores}
          classNamePrefix="stores-filter-select"
          placeholder="Loja"
          onChange={(value) => onChangeStore(value as Store)}
          value={store}
          isClearable
          getOptionLabel={(stores: Store) => stores.name}
          getOptionValue={(stores: Store) => String(stores.id)}
        />
      </div>
    </div>
  );
};

export default Filter;

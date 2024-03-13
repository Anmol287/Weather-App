import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";


// eslint-disable-next-line react/prop-types
export const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?&namePrefix=${inputValue}`, geoApiOptions);
            const response_1 = await response.json();
            return {
                options: response_1.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                })
            };
        } catch (err) {
            return console.error(err);
        }

    }

    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

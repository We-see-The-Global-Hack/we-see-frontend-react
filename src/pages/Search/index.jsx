import React, { useCallback, useState } from "react";
// components
import Title from "components/Title";
import { TextField, Button, Container } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import User from "./User";
// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
// images
import avatarImage1 from "assets/img/avatar.jpg";

import get from "lodash.get";
import useFetchData from "hooks/useFetchData";
import api from "libs/apis";

const cn = classNames.bind(styles);

const initialFilters = {
  causes: null,
  targetAudience: null,
  gender: null,
  firstName: "",
};

const Search = () => {
  const [filters, setFilters] = useState(initialFilters);

  const { resource, fetchResource } = useFetchData({
    api: api.user.list,
    initialValues: [],
    serializer: (response) => response.data,
  });

  const search = useCallback(() => {
    const copiedFilters = Object.assign({}, filters);
    Object.keys(copiedFilters).forEach((key) =>
      !Boolean(copiedFilters[key]) ? delete copiedFilters[key] : {}
    );
    fetchResource({ params: copiedFilters });
  }, [filters]);

  const changeText = (e) => {
    const text = get(e, ["target", "value"], "");
    setFilters((old) => ({ ...old, firstName: `/${text}/` }));
  };

  return (
    <Container maxWidth="lg">
      <Title text="Community" />
      <div className={cn("search_filters")}>
        <div className={cn("search_filters-selectors")}>
          <Autocomplete
            options={causes}
            style={{ width: 230 }}
            onChange={(e, value) =>
              setFilters((old) => ({ ...old, causes: value }))
            }
            value={filters.causes}
            renderInput={(params) => (
              <TextField {...params} label="Causes" variant="outlined" />
            )}
          />
          <Autocomplete
            options={target_audience}
            style={{ width: 300 }}
            onChange={(e, value) =>
              setFilters((old) => ({ ...old, targetAudience: value }))
            }
            value={filters.targetAudience}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Target audience"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            options={gender}
            style={{ width: 230 }}
            onChange={(e, value) =>
              setFilters((old) => ({ ...old, gender: value }))
            }
            value={filters.gender}
            renderInput={(params) => (
              <TextField {...params} label="Gender" variant="outlined" />
            )}
          />
        </div>
        <div className={cn("search_filters-name")}>
          <TextField
            value={filters.search}
            onChange={changeText}
            label="User"
            style={{ width: 500 }}
          />
          <Button
            type="button"
            onClick={search}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </div>
      </div>
      <div className={cn("search_users")}>
        <div className={cn("search_users-wrapper")}>
          {resource.map((user) => (
            <User
              key={user.id}
              avatar={avatarImage1}
              name={`${user.firstName} ${user.lastName}`}
              email={user.email}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Search;

const causes = [
  "Education",
  "Medical/Health",
  "Gender Equality",
  "Environmental/Animals protection",
  "Cultural/Arts",
  "Sports/Tourism/Recreation/Hobby",
  "Social Services/Welfare/Poverty alleviation",
  "Local Development/Communities",
  "Support for Nonprofits or social business",
  "Religion",
  "International needs/Development aid",
  "Law and rights Protection/Human Rights",
  "Public affairs/Democracy/Advocacy",
  "Labour Market/Professional affairs",
  "Entrepreneurship/Income generation",
];

const target_audience = [
  "Children & Youth",
  "Local Residents/Community",
  "Women",
  "Seniors",
  "LGBT+",
  "People with medical conditions or disabilities",
  "Other Minorities",
  "Animals",
  "Other Nonprofits and social business",
];

const gender = ["Male", "Female", "Other"];

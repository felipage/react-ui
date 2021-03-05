import React, { useState } from 'react';
import {
  DialogProvider,
  Button,
  AppBar,
  Content,
  SlowDropdownInput,
  CheckboxGroup,
  RadioGroup,
  SwitchGroup,
  Radio,
  Checkbox,
  Switch,
} from '../..';
import faker from 'faker';
import { countries } from 'countries-list';
import { HiOutlineUser } from 'react-icons/hi';

export default {
  title: 'Examples/Inputs',
};

export const Inputs = () => {
  return (
    <DialogProvider>
      <App></App>
    </DialogProvider>
  );
};

const App = () => {
  const [country, setCountry] = useState(faker.address.country);
  const [gender, setGender] = useState<string | null>(null);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [accountOptions, setAccountOptions] = useState<string[]>([]);
  const countryNames = Object.values(countries).map(country => country.name);

  return (
    <>
      <AppBar title="About Me" Icon={HiOutlineUser} />
      <Content>
        <h1 className="mt-3">About me</h1>
        <div className="mt-3">
          <SlowDropdownInput
            options={countryNames}
            id="country_input"
            label="I am from"
            value={country}
            onChange={setCountry}
          />
        </div>
        <div className="mt-3">
          <p>I am</p>
          <RadioGroup
            options={[
              {
                value: 'gender.male',
                label: 'Male',
              },
              {
                value: 'gender.female',
                label: 'Female',
              },
              {
                value: 'gender.other',
                label: 'Other',
              },
            ]}
            name="hobby_select"
            onChange={setGender}
          />
          <code>{JSON.stringify(gender)}</code>
        </div>
        <div className="mt-3">
          <p>I like</p>
          <CheckboxGroup
            options={[
              {
                value: 'hobbies.programming',
                label: 'Programming',
              },
              {
                value: 'hobbies.swimming',
                label: 'Swimming',
              },
            ]}
            onChange={setHobbies}
          />
          <code>{JSON.stringify(hobbies)}</code>
        </div>
        <h1 className="mt-3">Settings</h1>

        <div className="mt-3">
          <p>Account Options</p>
          <SwitchGroup
            onChange={setAccountOptions}
            options={[
              {
                value: 'public',
                label: 'Make Account Public',
              },
            ]}
            // onChange={setHobbies}
          />
          <code>{JSON.stringify(accountOptions)}</code>
        </div>
        <div className="mt-3">
          <Button>Update</Button>
        </div>
        <div className="mt-3">
          <h1>Components</h1>
          <div className="flex flex-col">
            <Radio label="Radio" />
            <Checkbox label="Checkbox" />
            <Switch label="Switch" />
          </div>
        </div>
      </Content>
    </>
  );
};

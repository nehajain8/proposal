import React, { useState } from "react";
import "./formStyle.css";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import TextField from "../../components/TextField";
import TextArea from "../../components/TextArea";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import intendedNetworkOptions from "./const/intentedNetworkOptions";
import CurrencyInput from "react-currency-input-field";

const CreateProposal = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({mode: "all"});

  const onSubmit = (data) => {
    const answer = window.confirm("Do you want to submit the proposal ?");
    if (answer) {
        // Save it!
        alert('Proposal is submitted');
        console.log(data);
      } else {
        // Do nothing!
        console.log("Proposal is not submitted");
      }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="proposalTitle"
        render={({ field: { onChange } }) => (
          <TextField
            label="Proposal title"
            name="proposalTitle"
            placeholder="Please enter proposal title"
            onChange={onChange}
          ></TextField>
        )}
        rules={{
          required: true,
          maxLength: 25,
          required: { value: true, message: "Please enter proposal title" },
          maxLength: {
            value: 25,
            message: "Your title must be less than 25 characters",
          },
        }}
      />
      <ErrorMessage
        style={{ color: "red" }}
        errors={errors}
        name="proposalTitle"
        as="p"
      />

      <Controller
        control={control}
        name="proposalSummary"
        render={({ field: { onChange } }) => (
          <TextArea
            label="Proposal Summary"
            rows="4"
            name="proposalSummary"
            onChange={onChange}
            placeholder="Please enter proposal summary"
          ></TextArea>
        )}
        rules={{
          required: { value: true, message: "Please enter proposal summary" },
          minLength: {
            value: 10,
            message: " Your summary must be atleast 10 characters",
          },
        }}
      />
      <ErrorMessage
        style={{ color: "red" }}
        errors={errors}
        name="proposalSummary"
        as="p"
      />

      <Controller
        control={control}
        name="intendedNetwork"
        render={({ field: { onChange } }) => (
          <Dropdown
            label="Intended Network"
            name="intendedNetwork"
            options={intendedNetworkOptions}
            onChange={onChange}
            isClearable={true}
          ></Dropdown>
        )}
        rules={{
          required: { value: true, message: "Please select intended network" },
        }}
      />
      <ErrorMessage
        style={{ color: "red" }}
        errors={errors}
        name="intendedNetwork"
        as="p"
      />

      <label>Price per episode: </label>
      <Controller
        control={control}
        name="pricePerEpisode"
        render={({ field: { onChange } }) => (
          <CurrencyInput
            prefix="£"
            id="price-per-episode"
            name="pricePerEpisode"
            placeholder="Please enter a number"
            decimalsLimit={2}
            onValueChange={onChange}
            defaultValue={0}
            allowNegativeValue={false}
          />
        )}
        rules={{
          required: { value: true, message: "Please enter price per episode" },
        }}
      />
      <ErrorMessage
        style={{ color: "red" }}
        errors={errors}
        name="pricePerEpisode"
        as="p"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default CreateProposal;

"use client";

import React from "react";
import Title from "../System/Title/Title";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Error/Error";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useFetch from "../../Hooks/useFetch";
const schema = yup.object({
  nome: yup.string().required("Campo obrigatório"),
}).required();

const Categories = () => {
  const { loading, error, request } = useFetch();
  
  const { register, handleSubmit:onSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

async function handleSubmit(data){
  const { url, options } = USER_POST({
    data
  });
  const { response } = await request(url, options);
}

  return (
    <div>
      <Title>Categorias</Title>
      <form onSubmit={onSubmit(handleSubmit)}>
        <Input
          type="text"
          id="categoria"
          register={...register("nome")
        }
        />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {errors.nome && <Error error={errors.nome.message}/>}
      </form>
    </div>
  );
};

export default Categories;
